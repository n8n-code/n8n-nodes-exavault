import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "List Users",
					"value": "List Users",
					"action": "Get a list of users",
					"description": "Get a list of the users in your account. There are three main types of searches you can do with this method:\n\n1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.\n1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the \"admin\" `role` AND `email` addresses ending in \"*@acme.com\". \n1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.\n\n**Notes:**\n\n- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.\n- The homeDir is the full path to the user's home directory, not a resource ID or hash.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Add User",
					"value": "Add User",
					"action": "Create a user",
					"description": "Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). \n\n**Notes:**\n\n- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete a user",
					"description": "Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in. \n\nResources and shares owned by the deleted user will be owned by the master user after the deletion.\n\n**Notes:**\n \n- You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.\n- The primary owner of the account cannot be deleted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get User By ID",
					"value": "Get User By ID",
					"action": "Get info for a user",
					"description": "Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.\n\n**Notes:**\n\n- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update a user",
					"description": "Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.\n\nIn the request body, you should only send the parameters for values that you wish to change for the user.\n\n**Notes:**\n\n- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.\n- You cannot edit a master user with this method.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
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
						"Users"
					],
					"operation": [
						"List Users"
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches.",
			"default": "testuser",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Home Resource",
			"name": "homeResource",
			"description": "Resource identifier for user's home directory. Does not support wildcard searches.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "homeResource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Nickname",
			"name": "nickname",
			"description": "Nickname to search for. Ignored if `username` is provided. Supports wildcard searches.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nickname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Email to search for. Ignored if `username` is provided. Supports wildcard searches",
			"default": "*@example.co",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"description": "Types of users to include the list. Ignored if `username` is provided. Valid options are **admin**, **master** and **user**",
			"default": "use",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Whether a user is locked. Ignored if `username` is provided. **0** means user is locked, **1** means user is not locked. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Searches the nickname, email, role and homeDir fields for the provided value. Ignored if `username` is provided. Supports wildcard searches.",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Starting user record in the result set. Can be used for pagination.",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.\n\nValid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified**",
			"default": "homeDir,-modified",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of users to return. Can be used for pagination.",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**.",
			"default": "homeResource,ownerAccount",
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
						"Users"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call",
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
						"Users"
					],
					"operation": [
						"Add User"
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
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "testuser@example.com",
			"description": "Email address for the user",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "2011-03-21 00:18:56",
			"description": "Optional timestamp when the user should expire, formatted in date-time.",
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
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Home Resource",
			"name": "homeResource",
			"type": "string",
			"default": "/",
			"description": "Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.\n\nThe user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user is created. \n\nUsers with the `role` **admin** should have their homeResource set to '/'",
			"routing": {
				"send": {
					"property": "homeResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Locked",
			"name": "locked",
			"type": "boolean",
			"default": true,
			"description": "If true, the user will not be able to log in",
			"routing": {
				"send": {
					"property": "locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Nickname",
			"name": "nickname",
			"type": "string",
			"default": "testnickname",
			"description": "An optional nickname (e.g. 'David from Sales').",
			"routing": {
				"send": {
					"property": "nickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Onboarding",
			"name": "onboarding",
			"type": "boolean",
			"default": true,
			"description": "Set this to **true** to enable extra help popups in the web file manager for this user.",
			"routing": {
				"send": {
					"property": "onboarding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password for the user",
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
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "{\n  \"changePassword\": true,\n  \"delete\": true,\n  \"deleteFormData\": true,\n  \"download\": true,\n  \"list\": true,\n  \"modify\": true,\n  \"notification\": true,\n  \"share\": true,\n  \"upload\": true,\n  \"viewFormData\": true\n}",
			"description": "An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.\nWhen creating a user with the `role` **admin**, you should set all of the permissions to `true`",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "options",
			"default": "user",
			"description": "The type of user to create, either **user** or **admin**.",
			"options": [
				{
					"name": "User",
					"value": "user"
				},
				{
					"name": "Admin",
					"value": "admin"
				}
			],
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "America/Los_Angeles",
			"description": "Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.\n",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "testuser",
			"description": "Username of the user to create. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.\n\n**Note** Usernames must be unique across all ExaVault accounts.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Welcome Email",
			"name": "welcomeEmail",
			"type": "boolean",
			"default": true,
			"description": "If **true**, send this new user a welcome email upon creation. The content of the welcome email can be configured with the [PATCH /accounts](#operation/updateAccount) method.",
			"routing": {
				"send": {
					"property": "welcomeEmail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete User"
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
						"Users"
					],
					"operation": [
						"Delete User"
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
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User By ID"
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
						"Users"
					],
					"operation": [
						"Get User By ID"
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
						"Users"
					],
					"operation": [
						"Get User By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**.",
			"default": "homeResource,owneraccount",
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
						"Users"
					],
					"operation": [
						"Get User By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Ev API Key",
			"name": "ev-api-key",
			"required": true,
			"description": "API key required to make the API call.",
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
						"Users"
					],
					"operation": [
						"Update User"
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
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "testuser@example.com",
			"description": "Email address for the user",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "2011-03-21 00:18:56",
			"description": "Optional timestamp when the user should expire.",
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
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Home Resource",
			"name": "homeResource",
			"type": "string",
			"default": "/",
			"description": "Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.\n\nThe user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user logs in.\n\nThis setting is ignored for users with the `role` **admin**.",
			"routing": {
				"send": {
					"property": "homeResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Locked",
			"name": "locked",
			"type": "boolean",
			"default": true,
			"description": "If true, the user will be prevented from logging in",
			"routing": {
				"send": {
					"property": "locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Nickname",
			"name": "nickname",
			"type": "string",
			"default": "testnickname",
			"description": "An optional nickname (e.g. 'David from Sales').",
			"routing": {
				"send": {
					"property": "nickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Onboarding",
			"name": "onboarding",
			"type": "boolean",
			"default": true,
			"description": "Set this to **true** to enable extra help popups in the web file manager for this user.",
			"routing": {
				"send": {
					"property": "onboarding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "New password for the user",
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
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"type": "options",
			"default": "user",
			"description": "The type of user (**admin** or **user**). Note that admin users cannot have a `homeResource` other than '/', and will have full permissions, but you must provide at least \"download,upload,list,delete\" in the `permissions` parameter.",
			"options": [
				{
					"name": "User",
					"value": "user"
				},
				{
					"name": "Admin",
					"value": "admin"
				}
			],
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "America/Los_Angeles",
			"description": "Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.\n",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "testuser",
			"description": "New username for the user. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.\n\n**Note** Usernames must be unique across all ExaVault accounts.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
];
