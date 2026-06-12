import type { INodeProperties } from 'n8n-workflow';

export const resourcesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					]
				}
			},
			"options": [
				{
					"name": "Delete Resources",
					"value": "Delete Resources",
					"action": "Delete Resources",
					"description": "Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.\n\n**Notes:**\n- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- It is not possible to un-delete a deleted resource.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/resources"
						}
					}
				},
				{
					"name": "Get Resource Info",
					"value": "Get Resource Info",
					"action": "Get Resource Properties",
					"description": "Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.\n\n**Notes:**\n- Authenticated user should have list permission.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources"
						}
					}
				},
				{
					"name": "Add Folder",
					"value": "Add Folder",
					"action": "Create a folder",
					"description": "Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.\n\n**Notes:**\n- Authenticated user should have modify permission.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources"
						}
					}
				},
				{
					"name": "Compress Files",
					"value": "Compress Files",
					"action": "Compress resources",
					"description": "Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.\n\n**Notes:**\n- Authenticated user should have modify permission.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources/compress"
						}
					}
				},
				{
					"name": "Copy Resources",
					"value": "Copy Resources",
					"action": "Copy resources",
					"description": "Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.\nIn the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the \nroot of the `parentResource`.\n\n**Notes:**\n- Authenticated user should have modify permission.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources/copy"
						}
					}
				},
				{
					"name": "Download",
					"value": "Download",
					"action": "Download a file",
					"description": "Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.\n\n**NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/download"
						}
					}
				},
				{
					"name": "Extract Files",
					"value": "Extract Files",
					"action": "Extract resources",
					"description": "Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.\n\n**Notes:**\n- You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources/extract"
						}
					}
				},
				{
					"name": "List Resources",
					"value": "List Resources",
					"action": "Get a list of all resources",
					"description": "Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /). \n\n**Searching for Files and Folders**\n\nUsing the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:\n\n- \\*Report\\* would find any files or folders with \"Report\" in the name.\n- Data\\_202?-09-30.xlsx would match items such as \"Data\\_2020-09-30.xlsx\", \"DATA\\_2021-09-30.xlsx\", \"data\\_2022-09-30.xlsx\" etc.\n- sales\\* would find any files or folders starting with the word \"Sales\"\n- \\*.csv would locate any files ending in \".csv\"\n- \\* matches everything within the directory tree starting at your given `resource`\n\nThe search is not case-sensitive. Searching for Clients\\* or clients\\* or CLIENTS\\*, etc. will provide identical results\n\nIf you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/list"
						}
					}
				},
				{
					"name": "List Resource Contents",
					"value": "List Resource Contents",
					"action": "List contents of folder",
					"description": "Returns a list of files/folders for the parent resource ID. \n\nYou can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).\n\n**Notes:**\n- Authenticated user should have list permission.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/list/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Move Resources",
					"value": "Move Resources",
					"action": "Move resources",
					"description": "Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.\nIn the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.\n\n**Notes:**\n- Authenticated user should have modify permission.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources/move"
						}
					}
				},
				{
					"name": "Get Preview Image",
					"value": "Get Preview Image",
					"action": "Preview a file",
					"description": "Returns a resized image of the specified document for supported file types.\n\nImage data returned is encoded in base64 format and can be viewed using the `<img>` element. \n\n```<img src='data:image/jpeg;base64' + meta.image/>```\n\n**Notes:**\n- Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/preview"
						}
					}
				},
				{
					"name": "Upload File",
					"value": "Upload File",
					"action": "Upload a file",
					"description": "Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resources/upload"
						}
					}
				},
				{
					"name": "Delete Resource By ID",
					"value": "Delete Resource By ID",
					"action": "Delete a Resource",
					"description": "Delete a single file or folder resource. Deleting a folder will also delete all of the contents.\n\n**Notes:**\n- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- There is no way to un-delete a deleted resource.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/resources/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Resource Info By ID",
					"value": "Get Resource Info By ID",
					"action": "Get resource metadata",
					"description": "Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.\n\n**Notes:**\n- Authenticated user should have list permission.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Resource By ID",
					"value": "Update Resource By ID",
					"action": "Rename a resource.",
					"description": "Update the specified file or folder resource record's \"name\" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/resources/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Delete Resources"
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
						"Resources"
					],
					"operation": [
						"Delete Resources"
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
						"Resources"
					],
					"operation": [
						"Delete Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Resource identifiers of items to delete.",
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
						"Resources"
					],
					"operation": [
						"Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Resource Info"
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
						"Resources"
					],
					"operation": [
						"Get Resource Info"
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
						"Resources"
					],
					"operation": [
						"Get Resource Info"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"required": true,
			"description": "Resource identifier of the file or folder to get metadata for.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Resource Info"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.",
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
						"Resources"
					],
					"operation": [
						"Get Resource Info"
					]
				}
			}
		},
		{
			"displayName": "POST /resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Add Folder"
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
						"Resources"
					],
					"operation": [
						"Add Folder"
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
						"Resources"
					],
					"operation": [
						"Add Folder"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the folder to create. Required if **path** is not used",
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
						"Resources"
					],
					"operation": [
						"Add Folder"
					]
				}
			}
		},
		{
			"displayName": "Parent Resource",
			"name": "parentResource",
			"type": "string",
			"default": "",
			"description": "Resource identifier where to create a folder. Required if **path** is not used",
			"routing": {
				"send": {
					"property": "parentResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Add Folder"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"type": "string",
			"default": "",
			"description": "Fully-qualified path to the new folder including folder's name",
			"routing": {
				"send": {
					"property": "path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Add Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/compress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Compress Files"
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
						"Resources"
					],
					"operation": [
						"Compress Files"
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
						"Resources"
					],
					"operation": [
						"Compress Files"
					]
				}
			}
		},
		{
			"displayName": "Archive Name",
			"name": "archiveName",
			"type": "string",
			"default": "",
			"description": "Name of the zip archive to create. If left blank, current date will be used.",
			"routing": {
				"send": {
					"property": "archiveName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Compress Files"
					]
				}
			}
		},
		{
			"displayName": "Parent Resource",
			"name": "parentResource",
			"type": "string",
			"default": "",
			"description": "Resource identifier of the folder where zip archive should be created.",
			"routing": {
				"send": {
					"property": "parentResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Compress Files"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Resource identifiers for file(s)/folder(s) to include in new zip file",
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
						"Resources"
					],
					"operation": [
						"Compress Files"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/copy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Copy Resources"
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
						"Resources"
					],
					"operation": [
						"Copy Resources"
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
						"Resources"
					],
					"operation": [
						"Copy Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent Resource",
			"name": "parentResource",
			"type": "string",
			"default": "",
			"description": "Resource identifier for folder where items will be copied to.",
			"routing": {
				"send": {
					"property": "parentResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Copy Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Resource identifier(s) of items to be copied to a new location",
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
						"Resources"
					],
					"operation": [
						"Copy Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Download"
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
						"Resources"
					],
					"operation": [
						"Download"
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
						"Resources"
					],
					"operation": [
						"Download"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "resources%5B%5D",
			"required": true,
			"description": "Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "resources[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Download"
					]
				}
			}
		},
		{
			"displayName": "Download Archive Name",
			"name": "downloadArchiveName",
			"description": "When downloading multiple files, this will be used as the name of the zip file that is created.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "downloadArchiveName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Download"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/extract",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Extract Files"
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
						"Resources"
					],
					"operation": [
						"Extract Files"
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
						"Resources"
					],
					"operation": [
						"Extract Files"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent Resource",
			"name": "parentResource",
			"type": "string",
			"default": "",
			"description": "Resource identifier for folder files should be extracted to.",
			"routing": {
				"send": {
					"property": "parentResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Extract Files"
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
			"description": "Resource identifier of zip archive to be extracted.",
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
						"Resources"
					],
					"operation": [
						"Extract Files"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"List Resources"
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
						"Resources"
					],
					"operation": [
						"List Resources"
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"required": true,
			"description": "Resource identifier to get resources for. Can be path/id/name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.",
			"default": "name",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting `offset=200` would trigger the server to skip the first 200 matching entries when returning the results.",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the `offset` parameter, above.",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Limit types of resources returned to \"file\" or \"dir\" only. This is ignored if you are using the `name` parameter to trigger a search.",
			"default": "",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in \"zip\" will be included in the list of results.",
			"default": "",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.",
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
						"Resources"
					],
					"operation": [
						"List Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/list/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"List Resource Contents"
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the parent resource to get a list of resources for.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.",
			"default": "name",
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.",
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above.",
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Limit types of resources returned to \"file\" or \"dir\" only.",
			"default": "",
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.",
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
						"Resources"
					],
					"operation": [
						"List Resource Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Move Resources"
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
						"Resources"
					],
					"operation": [
						"Move Resources"
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
						"Resources"
					],
					"operation": [
						"Move Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent Resource",
			"name": "parentResource",
			"type": "string",
			"default": "/copyhere",
			"description": "Resource identifier of folder to move files/folders to.",
			"routing": {
				"send": {
					"property": "parentResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Move Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resources",
			"name": "resources",
			"type": "json",
			"default": "[\n  \"/testone.jpg\",\n  \"/folder\"\n]",
			"description": "Array containing file/folder paths to move.",
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
						"Resources"
					],
					"operation": [
						"Move Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
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
						"Resources"
					],
					"operation": [
						"Get Preview Image"
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
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "resource",
			"required": true,
			"description": "Resource identifier for the image file.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"required": true,
			"description": "The size of the image.",
			"default": "small",
			"type": "options",
			"options": [
				{
					"name": "Small",
					"value": "small"
				},
				{
					"name": "Medium",
					"value": "medium"
				},
				{
					"name": "Large",
					"value": "large"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Overrides sizes. Sets to a specific width.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Overrides sizes. Sets to a specific height.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Preview Image"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
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
						"Resources"
					],
					"operation": [
						"Upload File"
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
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "Offset Bytes",
			"name": "offsetBytes",
			"description": "Allows a file upload to resume at a certain number of bytes.",
			"default": 4852,
			"type": "number",
			"routing": {
				"request": {
					"headers": {
						"offsetBytes": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"required": true,
			"description": "Destination path for the file being uploaded, including the file name.",
			"default": "",
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
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "File Size",
			"name": "fileSize",
			"required": true,
			"description": "File size, in bits, of the file being uploaded.",
			"default": 2935,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fileSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "Resume",
			"name": "resume",
			"description": "True if upload resume is supported, false if it isn't.\n",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "resume",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "Allow Overwrite",
			"name": "allowOverwrite",
			"description": "True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated. ",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowOverwrite",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "POST /resources/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Upload File"
					]
				}
			}
		},
		{
			"displayName": "DELETE /resources/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Delete Resource By ID"
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
						"Resources"
					],
					"operation": [
						"Delete Resource By ID"
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
						"Resources"
					],
					"operation": [
						"Delete Resource By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Get Resource Info By ID"
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
						"Resources"
					],
					"operation": [
						"Get Resource Info By ID"
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
						"Resources"
					],
					"operation": [
						"Get Resource Info By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.",
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
						"Resources"
					],
					"operation": [
						"Get Resource Info By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /resources/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"Update Resource By ID"
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
						"Resources"
					],
					"operation": [
						"Update Resource By ID"
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
						"Resources"
					],
					"operation": [
						"Update Resource By ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-renamed-file.txt",
			"description": "The new name for the resource (file or folder).",
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
						"Resources"
					],
					"operation": [
						"Update Resource By ID"
					]
				}
			}
		},
];
