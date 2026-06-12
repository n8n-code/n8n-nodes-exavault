import type { INodeProperties } from 'n8n-workflow';

export const activityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					]
				}
			},
			"options": [
				{
					"name": "Get Session Logs",
					"value": "Get Session Logs",
					"action": "Get activity logs",
					"description": "Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. \n\n**NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. \n  \n**Operation Types**\nSession activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:\n\n| File Manager Value | API Value | Notes |\n|-----|----|---|\n| Connect | PASS | |\n| Disconnect | EXIT | |\n| Upload | STOR | |\n| Download | RETR | |\n| Delete | DELE | |\n| Create Folder | MKD | |\n| Rename | RNTO | |\n| Move | MOVE | |\n| Copy | COPY | |\n| Compress | COMPR | |\n| Extract | EXTRACT | |\n| Shared Folders | SHARE | |\n| Send Files | SEND | |\n| Receive Files | RECV | |\n| _N/A_ | EDIT\\_SEND | Update send. Not shown in file manager |\n| Update Share | EDIT\\_SHARE| | \n| Update Receive | EDIT\\_RECV | |\n| Delete Send | DELE\\_SEND | |\n| Delete Receive | DELE\\_RECV | |\n| Delete Share | DELE\\_SHARE | |\n| Create Notification | NOTIFY | |\n| Update Notification | EDIT\\_NTFY| |\n| Delete Notification | DELE\\_NTFY | |\n| Create User | USER | |\n| Update User | EDIT\\_USER | |\n| Delete User | DELE\\_USER | |\n| _N/A_ | DFA | Create direct link. Not shown in file manager |\n| _N/A_ | EDIT\\_DFA | Update direct link options. Not shown in file manager |\n| _N/A_ | DELE\\_DFA | Deactivate direct link. Not shown in file manager|\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/activity/session"
						}
					}
				},
				{
					"name": "Get Webhook Logs",
					"value": "Get Webhook Logs",
					"action": "Get webhook logs",
					"description": "Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.\n\n**NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. \n\n**Event Types**\n\nWebhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:\n\n- resources.upload\n- resources.download\n- resources.delete\n- resources.createFolder\n- resources.rename\n- resources.move\n- resources.copy\n- resources.compress\n- resources.extract\n- shares.formSubmit\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/activity/webhooks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /activity/session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Session Logs"
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Start date of the filter data range",
			"default": "2019-10-18T06:48:40Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "End date of the filter data range",
			"default": "2019-10-18T06:48:40Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Ip Address",
			"name": "ipAddress",
			"description": "Used to filter session logs by ip address.",
			"default": "127.0.0.1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ipAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "Username used for filtering a list",
			"default": "jdoe",
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"description": "Path used to filter records",
			"default": "/folder*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "path",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter session logs for operation type (see table above for acceptable values)",
			"default": "EDIT_SHARE",
			"type": "string",
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Offset of the records list",
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Comma separated list sort params",
			"default": "-date",
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
						"Activity"
					],
					"operation": [
						"Get Session Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /activity/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Earliest date of entries to include in list",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Latest date of entries to include in list",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Endpoint URL",
			"name": "endpointUrl",
			"description": "Webhook listener endpoint",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endpointUrl",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "event",
			"description": "Type of activity that triggered the webhook attempt",
			"default": "resources.upload",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "event",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Status Code",
			"name": "statusCode",
			"description": "Response code from the webhook endpoint",
			"default": 200,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "statusCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Resource Path",
			"name": "resourcePath",
			"description": "Path of the resource that triggered the webhook attempt",
			"default": "/folder*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourcePath",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "Filter by triggering username.",
			"default": "exampleuser",
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Comma separated list sort params",
			"default": "-date,event",
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
						"Activity"
					],
					"operation": [
						"Get Webhook Logs"
					]
				}
			}
		},
];
