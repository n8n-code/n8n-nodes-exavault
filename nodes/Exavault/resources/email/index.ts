import type { INodeProperties } from 'n8n-workflow';

export const emailDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Email"
					]
				}
			},
			"options": [
				{
					"name": "Send Referral Email",
					"value": "Send Referral Email",
					"action": "Send referral email to a given address",
					"description": "Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/email/referral"
						}
					}
				},
				{
					"name": "Send Welcome Email",
					"value": "Send Welcome Email",
					"action": "Resend welcome email to specific user",
					"description": "Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/email/welcome/{{$parameter[\"username\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /email/referral",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email"
					],
					"operation": [
						"Send Referral Email"
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
						"Email"
					],
					"operation": [
						"Send Referral Email"
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
						"Email"
					],
					"operation": [
						"Send Referral Email"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Email"
					],
					"operation": [
						"Send Referral Email"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial.",
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
						"Email"
					],
					"operation": [
						"Send Referral Email"
					]
				}
			}
		},
		{
			"displayName": "POST /email/welcome/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email"
					],
					"operation": [
						"Send Welcome Email"
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
						"Email"
					],
					"operation": [
						"Send Welcome Email"
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
						"Email"
					],
					"operation": [
						"Send Welcome Email"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "A username to send the welcome email to.",
			"default": "exampleuser",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email"
					],
					"operation": [
						"Send Welcome Email"
					]
				}
			}
		},
];
