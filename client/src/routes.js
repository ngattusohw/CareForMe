import { HomePage, LoginRegisterPage } from './containers';

export default [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/login',
		exact: true,
		component: LoginRegisterPage,
	},
];
