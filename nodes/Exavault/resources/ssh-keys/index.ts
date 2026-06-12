import type { INodeProperties } from 'n8n-workflow';

export const sshKeysDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					]
				}
			},
			"options": [
				{
					"name": "Get SSH Keys List",
					"value": "Get SSH Keys List",
					"action": "Get metadata for a list of SSH Keys",
					"description": "Returns a list of SSH Keys within the account. Can be filtered for a single user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ssh-keys"
						}
					}
				},
				{
					"name": "Add SSH Key",
					"value": "Add SSH Key",
					"action": "Create a new SSH Key",
					"description": "Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).\n\nIf you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ssh-keys"
						}
					}
				},
				{
					"name": "Delete SSH Key",
					"value": "Delete SSH Key",
					"action": "Delete an SSH Key",
					"description": "Delete the specified SSH key. This will not delete or deactivate the user tied to the key.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/ssh-keys/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get SSH Key",
					"value": "Get SSH Key",
					"action": "Get metadata for an SSH Key",
					"description": "Return the information for a single SSH Key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ssh-keys/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ssh-keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"description": " Only return results for the given user ID. This is not the username, but the numeric ID of the user.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": " Limits the results by the given number. Cannot be set higher than 100.",
			"default": 0,
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": " Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.",
			"default": 0,
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Keys List"
					]
				}
			}
		},
		{
			"displayName": "POST /ssh-keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Add SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Add SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public Key",
			"name": "publicKey",
			"type": "string",
			"default": "",
			"description": "Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format. ",
			"routing": {
				"send": {
					"property": "publicKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User ID",
			"name": "userId",
			"type": "number",
			"default": 0,
			"description": "ID of the user to assign the new key to. ",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "DELETE /ssh-keys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Delete SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Delete SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Delete SSH Key"
					]
				}
			}
		},
		{
			"displayName": "GET /ssh-keys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSH Keys"
					],
					"operation": [
						"Get SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Key"
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
						"SSH Keys"
					],
					"operation": [
						"Get SSH Key"
					]
				}
			}
		},
];
