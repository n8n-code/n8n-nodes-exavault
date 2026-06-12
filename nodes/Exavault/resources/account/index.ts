import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Get account settings",
					"description": "Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account"
						}
					}
				},
				{
					"name": "Update Account",
					"value": "Update Account",
					"action": "Update account settings",
					"description": "Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.\n\n**Notes**\n\n- You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API Key required for the request",
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
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token for the request",
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
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related records to include in the response. Valid option is **masterUser**",
			"default": "masterUser",
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
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
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
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access token required to make the API call.",
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
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Account Onboarding",
			"name": "accountOnboarding",
			"type": "boolean",
			"default": true,
			"description": "Whether extra help popups can be enabled for users in the web file manager.",
			"routing": {
				"send": {
					"property": "accountOnboarding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ip Ranges",
			"name": "allowedIpRanges",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "IP Address Ranges for restricting account access",
			"routing": {
				"send": {
					"property": "allowedIpRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Branding Settings",
			"name": "brandingSettings",
			"type": "json",
			"default": "{\n  \"customEmail\": \"custom@example.com\",\n  \"theme\": \"default\"\n}",
			"routing": {
				"send": {
					"property": "brandingSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Complex Passwords",
			"name": "complexPasswords",
			"type": "boolean",
			"default": false,
			"description": "Whether to require complex passwords for all passwords.",
			"routing": {
				"send": {
					"property": "complexPasswords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Custom Signature",
			"name": "customSignature",
			"type": "string",
			"default": "",
			"description": "Signature to be automatically added to the bottom of emails generated by the account.",
			"routing": {
				"send": {
					"property": "customSignature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Email Content",
			"name": "emailContent",
			"type": "string",
			"default": "Great news, your new account is ready! For your records, we've listed information you'll use to log in below: FTP Server: [[ftpserver]] Username (Web and FTP access): [[username]] [[setpassword]]",
			"description": "Content of welcome email template.",
			"routing": {
				"send": {
					"property": "emailContent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Email Subject",
			"name": "emailSubject",
			"type": "string",
			"default": "ExaVault File Sharing Account",
			"description": "Subject line for welcome emails",
			"routing": {
				"send": {
					"property": "emailSubject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "External Domain",
			"name": "externalDomain",
			"type": "string",
			"default": "",
			"description": "Custom address used for web file manager. Not available for all account types.",
			"routing": {
				"send": {
					"property": "externalDomain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Quota",
			"name": "quota",
			"type": "json",
			"default": "{}",
			"description": "",
			"routing": {
				"send": {
					"property": "quota",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Secure Only",
			"name": "secureOnly",
			"type": "boolean",
			"default": false,
			"description": "Whether unencrypted FTP connections should be denied for the account.",
			"routing": {
				"send": {
					"property": "secureOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Show Referral Links",
			"name": "showReferralLinks",
			"type": "boolean",
			"default": false,
			"description": "Whether to display links for others to sign up on share views and invitation emails",
			"routing": {
				"send": {
					"property": "showReferralLinks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
];
