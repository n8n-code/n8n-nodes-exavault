import type { INodeProperties } from 'n8n-workflow';

export const notificationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					]
				}
			},
			"options": [
				{
					"name": "List Notifications",
					"value": "List Notifications",
					"action": "Get a list of notifications",
					"description": "Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.\n\n**Notes:**\n  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notifications"
						}
					}
				},
				{
					"name": "Add Notification",
					"value": "Add Notification",
					"action": "Create a new notification",
					"description": "Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;\n\n- To enable email, pass an array of email addresses to the `recipients` parameter of this call. \n- To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). \n\n**Notes:**\n  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications"
						}
					}
				},
				{
					"name": "Delete Notification By ID",
					"value": "Delete Notification By ID",
					"action": "Delete a notification",
					"description": "Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.\n\n**Notes:**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.\n- You can only delete notifications owned by your user account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/notifications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Notification By ID",
					"value": "Get Notification By ID",
					"action": "Get notification details",
					"description": "Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. \n\n**Notes**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.\n- You can only retrieve notifications owned by your user account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notifications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Notification By ID",
					"value": "Update Notification By ID",
					"action": "Update a notification",
					"description": "Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. \n\nWhen updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. \n\n**Notes:**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.\n- You can only change notifications owned by your user account.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/notifications/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /notifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call. ",
			"default": "",
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**\n\nIf this parameter is not used, only **file** and **folder** type notifications are included in the list.",
			"default": "file",
			"type": "options",
			"options": [
				{
					"name": "File",
					"value": "file"
				},
				{
					"name": "Folder",
					"value": "folder"
				},
				{
					"name": "Shared Folder",
					"value": "shared_folder"
				},
				{
					"name": "Send Receipt",
					"value": "send_receipt"
				},
				{
					"name": "Share Receipt",
					"value": "share_receipt"
				},
				{
					"name": "File Drop",
					"value": "file_drop"
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Starting notification record in the result set. Can be used for pagination.",
			"default": 50,
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.\n\nYou can chose multiple options for the sort by separating them with commmas, such as \"type,-date\" to sort by type, then most recent.",
			"default": "date",
			"type": "string",
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of notification records to return. Can be used for pagination.",
			"default": 100,
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**",
			"default": "resource,share,user",
			"type": "options",
			"options": [
				{
					"name": "Resource",
					"value": "resource"
				},
				{
					"name": "Share",
					"value": "share"
				},
				{
					"name": "User",
					"value": "user"
				}
			],
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
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"description": "The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all** \n\n**Note** The **all** action matches notifications set to \"all\", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "Connect",
					"value": "connect"
				},
				{
					"name": "Download",
					"value": "download"
				},
				{
					"name": "Upload",
					"value": "upload"
				},
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make API call. ",
			"default": "",
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
						"Notifications"
					],
					"operation": [
						"Add Notification"
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
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "upload",
			"description": "Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)",
			"options": [
				{
					"name": "Upload",
					"value": "upload"
				},
				{
					"name": "Download",
					"value": "download"
				},
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Custom message to include in notification emails.",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  \"myemail@example.com\"\n]",
			"description": "Email addresses to send notification emails to. If not specified, sends to the current user's email address.",
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
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource",
			"name": "resource",
			"type": "string",
			"default": "",
			"description": "Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.",
			"routing": {
				"send": {
					"property": "resource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Send Email",
			"name": "sendEmail",
			"type": "boolean",
			"default": true,
			"description": "Set to true if the user should be notified by email when the notification is triggered.",
			"routing": {
				"send": {
					"property": "sendEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "file",
			"description": "What kind of notification you're making. Valid choices are:\n\n- **file** to monitor activity for a file resource\n- **folder** to monitor activity for a folder resource",
			"options": [
				{
					"name": "File",
					"value": "file"
				},
				{
					"name": "Folder",
					"value": "folder"
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
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Usernames",
			"name": "usernames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Determines which users' actions should trigger the notification. \n\nRather than listing  individual users, you can also use 3 special options:\n\n- **notice\\_user\\_all** for activity by any user or share recipient\n- **notice\\_user\\_all\\_users** for activity only by user accounts\n- **notice\\_user\\_all\\_recipient** for activity only by share recipients",
			"routing": {
				"send": {
					"property": "usernames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Add Notification"
					]
				}
			}
		},
		{
			"displayName": "DELETE /notifications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "",
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
						"Notifications"
					],
					"operation": [
						"Delete Notification By ID"
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
						"Notifications"
					],
					"operation": [
						"Delete Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.",
			"default": 3,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /notifications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Get Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "",
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
						"Notifications"
					],
					"operation": [
						"Get Notification By ID"
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
						"Notifications"
					],
					"operation": [
						"Get Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.",
			"default": 3,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Get Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**.",
			"default": "resource,share",
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
						"Notifications"
					],
					"operation": [
						"Get Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /notifications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required to make the API call.",
			"default": "",
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
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
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
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.",
			"default": 3,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "all",
			"description": "Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)",
			"options": [
				{
					"name": "Upload",
					"value": "upload"
				},
				{
					"name": "Download",
					"value": "download"
				},
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Custom message to insert into the notification emails, along with the matching activity.",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  \"myemail@example.com\"\n]",
			"description": "Email addresses to send notification emails to. If empty, sends to the current user's email address.",
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
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Send Email",
			"name": "sendEmail",
			"type": "boolean",
			"default": true,
			"description": "Whether an email should be sent to the recipients when matching activity happens.",
			"routing": {
				"send": {
					"property": "sendEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
		{
			"displayName": "Usernames",
			"name": "usernames",
			"type": "json",
			"default": "[\n  \"notice_user_all\"\n]",
			"description": "Determines which users' actions should trigger the notification. \n\nRather than listing  individual users, you can also use 3 special options:\n\n- **notice\\_user\\_all** for activity by any user or share recipient\n- **notice\\_user\\_all\\_users** for activity only by user accounts\n- **notice\\_user\\_all\\_recipients** for activity only by share recipients",
			"routing": {
				"send": {
					"property": "usernames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification By ID"
					]
				}
			}
		},
];
