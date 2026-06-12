import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { resourcesDescription } from './resources/resources';
import { activityDescription } from './resources/activity';
import { usersDescription } from './resources/users';
import { sharesDescription } from './resources/shares';
import { notificationsDescription } from './resources/notifications';
import { emailListsDescription } from './resources/email-lists';
import { accountDescription } from './resources/account';
import { sshKeysDescription } from './resources/ssh-keys';
import { formDescription } from './resources/form';
import { recipientsDescription } from './resources/recipients';
import { emailDescription } from './resources/email';
import { webhooksDescription } from './resources/webhooks';

export class Exavault implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Exavault',
                name: 'N8nDevExavault',
                icon: { light: 'file:./exavault.png', dark: 'file:./exavault.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ExaVault API integrates file transfer and user management tools into applications, supporting POST requests.',
                defaults: { name: 'Exavault' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevExavaultApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Resources",
					"value": "Resources",
					"description": "The file and folder management APIs allow you to work with the core of your account. You can upload or download files and create, move and delete files & folders, to name a few options."
				},
				{
					"name": "Activity",
					"value": "Activity",
					"description": "The activity APIs allow you to get logs from your account. We track multiple types of under the umbrellas; __Activity Logs__ that show an action a user performed or initiated on a file, folder or the account. __Webhooks Logs__ that show records of all outbound webhook calls made by ExaVault. Both can be optionally filtered to only return specific data you’re looking for."
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "The user APIs allow you to create, update and delete users from your account. Users can be assigned unique permissions, set to expire after a certain time period, and more."
				},
				{
					"name": "Shares",
					"value": "Shares",
					"description": "The sharing APIs allow you create and manage shares. Shares can be used to send a single file, share a folder, or set up a receive folder and its input form."
				},
				{
					"name": "Notifications",
					"value": "Notifications",
					"description": "The notifications APIs allow you to set up and manage notifications in your account. When an action is taken on a file folder, you can be notified via email or webhook."
				},
				{
					"name": "Email Lists",
					"value": "Email Lists",
					"description": "The email lists APIs allow you to manage email lists that can be used for speeding up actions within the ExaVault File Manager such as adding your marketing team, Tom, Jane, and Harry, to a shared folder in a single action instead of three."
				},
				{
					"name": "Account",
					"value": "Account",
					"description": "The account APIs allow you review and change account settings. Many account settings will have immediate effects on all current and future users, so consider adding a user facing confirmation step before sending an update call."
				},
				{
					"name": "SSH Keys",
					"value": "SSH Keys",
					"description": "THe SSH Keys APIs allow you to manage SSH keys for users in your account. You can upload the contents of a public key for a user, get information for keys which are already defined, and remove a key from a user."
				},
				{
					"name": "Form",
					"value": "Form",
					"description": "The forms APIs allow you to manage the inputs and data submitted through receive folder forms."
				},
				{
					"name": "Recipients",
					"value": "Recipients",
					"description": "The recipients APIs allow to retrieve, delete, or resend invitations for recipients of shared folders."
				},
				{
					"name": "Email",
					"value": "Email",
					"description": "The emails APIs allow you to generate welcome emails for account users and referral emails."
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": ""
				}
			],
			"default": ""
		},
		...resourcesDescription,
		...activityDescription,
		...usersDescription,
		...sharesDescription,
		...notificationsDescription,
		...emailListsDescription,
		...accountDescription,
		...sshKeysDescription,
		...formDescription,
		...recipientsDescription,
		...emailDescription,
		...webhooksDescription
                ],
        };
}
