import type { INodeProperties } from 'n8n-workflow';

export const emailListsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					]
				}
			},
			"options": [
				{
					"name": "Get Email Lists",
					"value": "Get Email Lists",
					"action": "Get all email groups",
					"description": "List all email groups for authenticated user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/email-lists"
						}
					}
				},
				{
					"name": "Add Email List",
					"value": "Add Email List",
					"action": "Create new email list",
					"description": "Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/email-lists"
						}
					}
				},
				{
					"name": "Delete Email List By ID",
					"value": "Delete Email List By ID",
					"action": "Delete an email group with given id",
					"description": "Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/email-lists/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Email List By ID",
					"value": "Get Email List By ID",
					"action": "Get individual email group",
					"description": "Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/email-lists/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Email List By ID",
					"value": "Update Email List By ID",
					"action": "Update an email group",
					"description": "Add or remove emails from an email list that can be used to send and share files with groups. \n\n**Notes**\n\n*This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  ",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/email-lists/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /email-lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Get Email Lists"
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
						"Email Lists"
					],
					"operation": [
						"Get Email Lists"
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
						"Email Lists"
					],
					"operation": [
						"Get Email Lists"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related record types to include in the response. Valid option is `ownerUser`",
			"default": "",
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
						"Email Lists"
					],
					"operation": [
						"Get Email Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /email-lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Add Email List"
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
						"Email Lists"
					],
					"operation": [
						"Add Email List"
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
						"Email Lists"
					],
					"operation": [
						"Add Email List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  \"johns@example.com\",\n  \"jdoe@example.com\"\n]",
			"description": "Array of email addresses to include in the email list. ",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Add Email List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My friends list",
			"description": "Name of the email list. ",
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
						"Email Lists"
					],
					"operation": [
						"Add Email List"
					]
				}
			}
		},
		{
			"displayName": "DELETE /email-lists/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Delete Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Delete Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Delete Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the email list to delete",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Delete Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /email-lists/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Get Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Get Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Get Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the email list to return.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Get Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related record types to include in the response. Valid option is `ownerUser`",
			"default": "",
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
						"Email Lists"
					],
					"operation": [
						"Get Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /email-lists/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
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
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the email list to update.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  \"yuk@example.com\",\n  \"jdoe@example.com\"\n]",
			"description": "Email addresses that replace existing list.",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My friends list",
			"description": "Name of the email list.",
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
						"Email Lists"
					],
					"operation": [
						"Update Email List By ID"
					]
				}
			}
		},
];
