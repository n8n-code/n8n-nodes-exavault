import type { INodeProperties } from 'n8n-workflow';

export const recipientsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Recipients"
					]
				}
			},
			"options": [
				{
					"name": "Resend Invitations For Share",
					"value": "Resend Invitations For Share",
					"action": "Resend invitations to share recipients",
					"description": "Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.\n\nYou can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/recipients/shares/invites/{{$parameter[\"shareId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /recipients/shares/invites/{shareId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recipients"
					],
					"operation": [
						"Resend Invitations For Share"
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
						"Recipients"
					],
					"operation": [
						"Resend Invitations For Share"
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
						"Recipients"
					],
					"operation": [
						"Resend Invitations For Share"
					]
				}
			}
		},
		{
			"displayName": "Share ID",
			"name": "shareId",
			"required": true,
			"description": "ID of the share to resend invites for.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Recipients"
					],
					"operation": [
						"Resend Invitations For Share"
					]
				}
			}
		},
		{
			"displayName": "Recipient ID",
			"name": "recipientId",
			"type": "number",
			"default": 0,
			"description": "ID number of recipient to send a new invitation to.",
			"routing": {
				"send": {
					"property": "recipientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recipients"
					],
					"operation": [
						"Resend Invitations For Share"
					]
				}
			}
		},
];
