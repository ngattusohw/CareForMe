import { HomePage, LoginRegisterPage, RegisterPage } from './containers';

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
	{
		path: '/register',
		exact: true,
		component: RegisterPage,
	},
];
