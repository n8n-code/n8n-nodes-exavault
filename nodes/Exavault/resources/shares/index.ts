import type { INodeProperties } from 'n8n-workflow';

export const sharesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					]
				}
			},
			"options": [
				{
					"name": "List Shares",
					"value": "List Shares",
					"action": "Get a list of shares",
					"description": "Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.\n\n\n**Notes:**\n\n- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- To get share objects with type send, authenticated user's role must be admin or master.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares"
						}
					}
				},
				{
					"name": "Add Share",
					"value": "Add Share",
					"action": "Creates a share",
					"description": "Creates a new share object for the given path in your account. We support three types of shares:\n\n  - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.\n  - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.\n  - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.\n  \n**How to send files from your computer using the API**:\n\nIn order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:\n\n1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a \"meta\" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.\n2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The \"/\" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**\n3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**\n\n**Setting the Share Permissions**\n\nOnly 5 different combinations of permissions are valid for the `accessMode` object:\n\n- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**\n- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**\n- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**\n- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**\n- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**\n\nAny other combination of permissions provided as the `accessMode` will be rejected as a bad request.\n\n**Notes:**\n\nAuthenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares"
						}
					}
				},
				{
					"name": "Complete Direct Send",
					"value": "Complete Direct Send",
					"action": "Complete send files",
					"description": "After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.\n  \n**How to send files from your computer using the API**:\n\nIn order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:\n\n1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a \"meta\" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.\n2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The \"/\" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**\n3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/complete-send/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Share By ID",
					"value": "Delete Share By ID",
					"action": "Deactivate a share",
					"description": "Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.\n\n**Notes:**\n\n- You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.\n- You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Share By ID",
					"value": "Get Share By ID",
					"action": "Get a share",
					"description": "Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.\n\n**Notes:**\n\n- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- To get share objects with type send, authenticated user's role must be admin or master.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Share By ID",
					"value": "Update Share By ID",
					"action": "Update a share",
					"description": "Change the settings on an active share. Any changes made will affect all users that have access to the share. \n\nWhen updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.\n\n**Setting the Share Permissions**\n\nOnly 5 different combinations of permissions are valid for the `accessMode` object:\n\n- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**\n- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**\n- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**\n- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**\n- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**\n\nAny other combination of permissions provided as the `accessMode` will be rejected as a bad request.\n\n**Notes:**\n\n  - Authenticated user should be the owner of the specified share.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access token required to make the API call.",
			"default": "5dc97cc607985eb8da033220e7447647e7915fbf73808",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Current offset of records (for pagination)",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit of records to be returned (for pagination)",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"description": "Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)",
			"default": "active",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Current User",
					"value": "currentUser"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "What order the list of matches should be in.",
			"default": "created",
			"type": "options",
			"options": [
				{
					"name": "Created",
					"value": "created"
				},
				{
					"name": "Created",
					"value": "-created"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Limit the list of matches to only certain types of shares.",
			"default": "receive",
			"type": "options",
			"options": [
				{
					"name": "Receive",
					"value": "receive"
				},
				{
					"name": "Shared Folder",
					"value": "shared_folder"
				},
				{
					"name": "Send",
					"value": "send"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.",
			"default": "owner,notifications",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with \"send\".\n\nUse this parameter if you are searching for shares or receives for a specific folder name. For example **/Clients/ACME/To Be Processed**.",
			"default": "Customer*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"description": "Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in \"@example.com\". ",
			"default": "test@example.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "recipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"description": "When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word \"taxes\".",
			"default": "submitted",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "message",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching.",
			"default": "example",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"List Shares"
					]
				}
			}
		},
		{
			"displayName": "POST /shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access token required to make the API call.",
			"default": "5dc97cc607985eb8da033220e7447647e7915fbf73808",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Access Mode",
			"name": "accessMode",
			"type": "json",
			"default": "{}",
			"description": "An object defining what a not-logged-in visitor can do with the share contents",
			"routing": {
				"send": {
					"property": "accessMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Embed",
			"name": "embed",
			"type": "boolean",
			"default": false,
			"description": "Whether this share can be embedded within a web page.",
			"routing": {
				"send": {
					"property": "embed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "2017-09-25T14:12:10Z",
			"description": "Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available.",
			"routing": {
				"send": {
					"property": "expiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "File Drop Create Folders",
			"name": "fileDropCreateFolders",
			"type": "boolean",
			"default": false,
			"description": "Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form. ",
			"routing": {
				"send": {
					"property": "fileDropCreateFolders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Has Notification",
			"name": "hasNotification",
			"type": "boolean",
			"default": false,
			"description": "Whether delivery receipts should be sent.",
			"routing": {
				"send": {
					"property": "hasNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "isPublic",
			"type": "boolean",
			"default": true,
			"description": "Whether someone can visit the share without following a personalized recipient link.",
			"routing": {
				"send": {
					"property": "isPublic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Message Body",
			"name": "messageBody",
			"type": "string",
			"default": null,
			"description": "The message to be included in email invitations for your recipients. Ignored if you have not also provided `recipients` and `messageSubject`",
			"routing": {
				"send": {
					"property": "messageBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Message Subject",
			"name": "messageSubject",
			"type": "string",
			"default": "Invitation to a shared folder",
			"description": "Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `messageBody`",
			"routing": {
				"send": {
					"property": "messageSubject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Shared Folder",
			"description": "A name for the share. This will be visible on the page that recipients visit. ",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Notification Emails",
			"name": "notificationEmails",
			"type": "json",
			"default": "[\n  \"notify@example.com\",\n  \"notify2@example.com\"\n]",
			"description": "Emails that will receive delivery receipts for this share. `hasNotification` must be **true** for delivery receipts will be sent.",
			"routing": {
				"send": {
					"property": "notificationEmails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": null,
			"description": "Set a password for recipients to access the share. All recipients will use the same password.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "People you want to invite to the share. **Note**: unless you also set the `messageSubject` and `messageBody` for the new share, invitation emails will not be sent to these recipients.",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Require Email",
			"name": "requireEmail",
			"type": "boolean",
			"default": false,
			"description": "True if recipients must provide their email to view the share.",
			"routing": {
				"send": {
					"property": "requireEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  \"/testfolder\"\n]",
			"description": "Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.\n\n**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.\n\n**send** shares may have multiple `resource` parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.\n",
			"routing": {
				"send": {
					"property": "resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "Sending Local Files",
			"name": "sendingLocalFiles",
			"type": "boolean",
			"default": true,
			"description": "Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded.",
			"routing": {
				"send": {
					"property": "sendingLocalFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "shared_folder",
			"description": "The type of share to create. See above for a description of each.",
			"options": [
				{
					"name": "Shared Folder",
					"value": "shared_folder"
				},
				{
					"name": "Receive",
					"value": "receive"
				},
				{
					"name": "Send",
					"value": "send"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Add Share"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/complete-send/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Complete Direct Send"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Complete Direct Send"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token",
			"default": "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Complete Direct Send"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the share to trigger invitations for.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Complete Direct Send"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Delete Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Delete Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access token required to make the API call.",
			"default": "5dc97cc607985eb8da033220e7447647e7915fbf73808",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Delete Share By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Get Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Get Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token",
			"default": "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Get Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.",
			"default": "owner,notifications",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Get Share By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key",
			"default": "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token",
			"default": "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ev-access-token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Access Mode",
			"name": "accessMode",
			"type": "json",
			"default": "{}",
			"description": "An object defining what a not-logged-in visitor can do with the share contents",
			"routing": {
				"send": {
					"property": "accessMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Embed",
			"name": "embed",
			"type": "boolean",
			"default": false,
			"description": "Whether the share can be embedded in another web page.",
			"routing": {
				"send": {
					"property": "embed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "2017-09-25T14:12:10Z",
			"description": "New expiration date and time for the share",
			"routing": {
				"send": {
					"property": "expiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "File Drop Create Folders",
			"name": "fileDropCreateFolders",
			"type": "boolean",
			"default": false,
			"description": "Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings)",
			"routing": {
				"send": {
					"property": "fileDropCreateFolders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Has Notification",
			"name": "hasNotification",
			"type": "boolean",
			"default": false,
			"description": "Whether delivery receipts should be sent for this share.",
			"routing": {
				"send": {
					"property": "hasNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "isPublic",
			"type": "boolean",
			"default": true,
			"description": "Whether people can visit the share without following a link from an invitation email",
			"routing": {
				"send": {
					"property": "isPublic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Message Body",
			"name": "messageBody",
			"type": "string",
			"default": null,
			"description": "Message content to use for emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `subject`",
			"routing": {
				"send": {
					"property": "messageBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Message Subject",
			"name": "messageSubject",
			"type": "string",
			"default": "Invitation to a shared folder",
			"description": "Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`",
			"routing": {
				"send": {
					"property": "messageSubject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Shared Folder",
			"description": "Name of the share.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Emails",
			"name": "notificationEmails",
			"type": "json",
			"default": "[\n  \"notify@example.com\",\n  \"notify2@example.com\"\n]",
			"description": "List of email addresses to send delivery receipts to. Ignored if `hasNotification` is false. ",
			"routing": {
				"send": {
					"property": "notificationEmails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": null,
			"description": "New password for the share. To leave the password unchanged, do not send this parameter.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "People you want to invite to the share. \n\n**Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.\n\n**Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share. ",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Require Email",
			"name": "requireEmail",
			"type": "boolean",
			"default": false,
			"description": "Whether visitors to the share will be required to enter their email in order to access the share.",
			"routing": {
				"send": {
					"property": "requireEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  \"/testfolder\"\n]",
			"description": "Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.\n\n**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.\n\n**send** shares may have multiple `resource` parameters. \n\n**NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request.",
			"routing": {
				"send": {
					"property": "resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "number",
			"default": 0,
			"description": "New status for the share. You can set an active share to inactive by setting the status to **0**",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares"
					],
					"operation": [
						"Update Share By ID"
					]
				}
			}
		},
];
