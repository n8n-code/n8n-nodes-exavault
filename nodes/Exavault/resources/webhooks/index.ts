import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "Get Wehooks List",
					"value": "Get Wehooks List",
					"action": "Get Webhooks List",
					"description": "Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks"
						}
					}
				},
				{
					"name": "Add Webhook",
					"value": "Add Webhook",
					"action": "Add A New Webhook",
					"description": "Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks"
						}
					}
				},
				{
					"name": "Regenerate Webhook Token",
					"value": "Regenerate Webhook Token",
					"action": "Regenerate security token",
					"description": "This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks/regenerate-token/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Resend Webhook Activity Entry",
					"value": "Resend Webhook Activity Entry",
					"action": "Resend a webhook message",
					"description": "This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks/resend/{{$parameter[\"activityId\"]}}"
						}
					}
				},
				{
					"name": "Delete Webhook",
					"value": "Delete Webhook",
					"action": "Delete a webhook",
					"description": "Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/webhooks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Webhook By ID",
					"value": "Get Webhook By ID",
					"action": "Get info for a webhook",
					"description": "Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Webhook",
					"value": "Update Webhook",
					"action": "Update a webhook",
					"description": "Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating. \n\nYou only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/webhooks/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
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
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "List of related record types to include. Valid options are `owningAccount` and `resource`",
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
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Records to skip before returning results.",
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
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit of the records list",
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
						"Webhooks"
					],
					"operation": [
						"Get Wehooks List"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint URL",
			"name": "endpointUrl",
			"type": "string",
			"default": "https://example.com/webhook",
			"description": "The endpoint is where the webhook request will be sent.",
			"routing": {
				"send": {
					"property": "endpointUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "string",
			"default": "/uploads-folder",
			"description": "Resource identifier for the top folder this webhook is associated with",
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
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"displayName": "Response Version",
			"name": "responseVersion",
			"type": "options",
			"default": "v2",
			"description": "What version of webhook request should be sent to the endpoint URL when messages are sent",
			"options": [
				{
					"name": "v1",
					"value": "v1"
				},
				{
					"name": "v2",
					"value": "v2"
				}
			],
			"routing": {
				"send": {
					"property": "responseVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"displayName": "Triggers",
			"name": "triggers",
			"type": "json",
			"default": "{\n  \"resources\": {},\n  \"shares\": {}\n}",
			"routing": {
				"send": {
					"property": "triggers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Add Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks/regenerate-token/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Regenerate Webhook Token"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Regenerate Webhook Token"
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
						"Webhooks"
					],
					"operation": [
						"Regenerate Webhook Token"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks/resend/{activityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Resend Webhook Activity Entry"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Resend Webhook Activity Entry"
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
						"Webhooks"
					],
					"operation": [
						"Resend Webhook Activity Entry"
					]
				}
			}
		},
		{
			"displayName": "DELETE /webhooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Delete Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "GET /webhooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook By ID"
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": " Include metadata for related items; `ownerAccount` and/or `resource` ",
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /webhooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Endpoint URL",
			"name": "endpointUrl",
			"type": "string",
			"default": "https://example.com/new-endpoint",
			"description": "New endpoint URL to use for the webhook configuration",
			"routing": {
				"send": {
					"property": "endpointUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "string",
			"default": "/newfolder",
			"description": "Resource identifier of the top folder watched by this webhook.",
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
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Response Version",
			"name": "responseVersion",
			"type": "options",
			"default": "v1",
			"description": "Version of the webhooks message to send to the endpoint",
			"options": [
				{
					"name": "v2",
					"value": "v2"
				},
				{
					"name": "v1",
					"value": "v1"
				}
			],
			"routing": {
				"send": {
					"property": "responseVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Triggers",
			"name": "triggers",
			"type": "json",
			"default": "{\n  \"resources\": {},\n  \"shares\": {}\n}",
			"routing": {
				"send": {
					"property": "triggers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
];
