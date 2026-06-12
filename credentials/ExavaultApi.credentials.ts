import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ExavaultApi implements ICredentialType {
        name = 'N8nDevExavaultApi';

        displayName = 'Exavault API';

        icon: Icon = { light: 'file:../nodes/Exavault/exavault.png', dark: 'file:../nodes/Exavault/exavault.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://accountname.exavault.com/api/v2',
                        required: true,
                        placeholder: 'https://accountname.exavault.com/api/v2',
                        description: 'The base URL of your Exavault API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
