////////Component imports
import { IPmdsCdkErrorPageLiterals } from '../models/pmds-cdk-error-page-literals.model';

export const literals = {
	401: {
		error: 'Error 401',
		title: 'It seems that you are not registered in the system',
		paragraph:
			'Don’t worry, we recommend you to speak with your local bank to register. If you want you can also visit our Homepage to find out about other topics.',
		buttons: [
			{
				label: 'Visit our Homepage',
				action: () => alert('Visit our Homepage click'),
				type: 'primary',
			},
		],
	},
	403: {
		error: 'Error 403',
		title: 'Hmm… It looks like you don’t have access to this area',
		paragraph:
			'You can contact your bank representative to solve it. If you need our help, you can talk with our experts. And remember that you can visit our Homepage whenever you want.',
		buttons: [
			{
				label: 'Talk with an expert',
				action: () => alert('Talk with an expert click'),
				type: 'primary',
			},
			{
				label: 'Go to Homepage',
				action: () => alert('Go to Homepage click'),
				type: 'secondary',
			},
		],
	},
	404: {
		error: 'Error 404',
		title: 'Oops! We can’t seem to find the page you’re looking for',
		paragraph: `Probably a misspelling may have occurred and it is not the correct URL or this page might not exist anymore.
		<br>
		Don't worry. Check the page you are trying to access or visit our Homepage.`,
		buttons: [
			{
				label: 'Go to Homepage',
				action: () => alert('Go to Homepage click'),
				type: 'primary',
			},
		],
	},
	500: {
		error: 'Error 500',
		title: 'Something seems to be not working here',
		paragraph:
			'This is not your fault. We recommend you to reload this page or try to come back later. If this wouldn’t work, don’t hesitate to contact us.',
		buttons: [
			{
				label: 'Reload',
				action: () => alert('Reload click'),
				type: 'primary',
			},
		],
	},
	503: {
		error: 'Error 503',
		title: 'Oops! Sorry, we are doing maintenance',
		paragraph:
			'We are working to improve your experience in this page. You can go back to the previous page or if you prefer you can visit our Homepage for other tasks.',
		buttons: [
			{
				label: 'Go back',
				action: () => alert('Go back click'),
				type: 'primary',
			},
			{
				label: 'Go to Homepage',
				action: () => alert('Go to Homepage'),
				type: 'secondary',
			},
		],
	},
} as IPmdsCdkErrorPageLiterals;