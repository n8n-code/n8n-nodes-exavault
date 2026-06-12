import type { INodeProperties } from 'n8n-workflow';

export const formDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					]
				}
			},
			"options": [
				{
					"name": "Get Form By Share Hash",
					"value": "Get Form By Share Hash",
					"action": "Get receive folder form settings",
					"description": "Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.\n\nUse the `include` parameter (with the value **share**) to also get the details of the associated receive folder.\n\n**Note**\n\n- If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/forms"
						}
					}
				},
				{
					"name": "Delete Form Message By ID",
					"value": "Delete Form Message By ID",
					"action": "Delete a receive form submission",
					"description": "Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. \n\n**Notes**:\n\n- Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete\n- You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation\n- It is not possible to un-delete data that is removed in this way\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/forms/entries/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Form Entries",
					"value": "Get Form Entries",
					"action": "Get form data entries for a receive",
					"description": "Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/forms/entries/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Form By ID",
					"value": "Get Form By ID",
					"action": "Get receive folder form by Id",
					"description": "Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. \n\nUse the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. \n\n**Note**\n\nIf you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/forms/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Form By ID",
					"value": "Update Form By ID",
					"action": "Updates a form with given parameters",
					"description": "Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. \n\n**Notes**\n\n*This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          ",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/forms/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /forms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Get Form By Share Hash"
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
						"Form"
					],
					"operation": [
						"Get Form By Share Hash"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token required to make the API call.",
			"default": "",
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
						"Form"
					],
					"operation": [
						"Get Form By Share Hash"
					]
				}
			}
		},
		{
			"displayName": "Share Hash",
			"name": "shareHash",
			"required": true,
			"description": "Share hash to retrieve the form for.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shareHash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Get Form By Share Hash"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Related record types to include in the response. Valid option is **share**",
			"default": "share",
			"type": "options",
			"options": [
				{
					"name": "Share",
					"value": "share"
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
						"Form"
					],
					"operation": [
						"Get Form By Share Hash"
					]
				}
			}
		},
		{
			"displayName": "DELETE /forms/entries/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Delete Form Message By ID"
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
						"Form"
					],
					"operation": [
						"Delete Form Message By ID"
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
						"Form"
					],
					"operation": [
						"Delete Form Message By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the entry to be deleted data for",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Delete Form Message By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /forms/entries/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Get Form Entries"
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
						"Form"
					],
					"operation": [
						"Get Form Entries"
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
						"Form"
					],
					"operation": [
						"Get Form Entries"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the form to retrieve entries for.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Get Form Entries"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit of records to be returned (for pagination)",
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
						"Form"
					],
					"operation": [
						"Get Form Entries"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Current offset of records (for pagination)",
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
						"Form"
					],
					"operation": [
						"Get Form Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /forms/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Get Form By ID"
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
						"Form"
					],
					"operation": [
						"Get Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Ev Access Token",
			"name": "ev-access-token",
			"required": true,
			"description": "Access Token required to make the API call.",
			"default": "",
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
						"Form"
					],
					"operation": [
						"Get Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Enter \"**share**\" to get information about associated receive folder.",
			"default": "share",
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
						"Form"
					],
					"operation": [
						"Get Form By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /forms/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
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
						"Form"
					],
					"operation": [
						"Update Form By ID"
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
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
		{
			"displayName": "CSS Styles",
			"name": "cssStyles",
			"type": "string",
			"default": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}     ",
			"routing": {
				"send": {
					"property": "cssStyles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Elements",
			"name": "elements",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"name\": \"Your name\",\n    \"order\": 0,\n    \"settings\": {\n      \"isRequired\": true,\n      \"senderEmail\": false,\n      \"useAsFolderName\": false\n    },\n    \"type\": \"name\"\n  }\n]",
			"routing": {
				"send": {
					"property": "elements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Form Description",
			"name": "formDescription",
			"type": "string",
			"default": "Send your files",
			"description": "Set a description for the form that will be visible to recipients. ",
			"routing": {
				"send": {
					"property": "formDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Submit Button Text",
			"name": "submitButtonText",
			"type": "string",
			"default": "Send Files",
			"description": "Text to be displayed on the submission button.",
			"routing": {
				"send": {
					"property": "submitButtonText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
		{
			"displayName": "Success Message",
			"name": "successMessage",
			"type": "string",
			"default": "Your files were uploaded",
			"description": "Text to be displayed when a recipient has submitted the form. ",
			"routing": {
				"send": {
					"property": "successMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Form"
					],
					"operation": [
						"Update Form By ID"
					]
				}
			}
		},
];
