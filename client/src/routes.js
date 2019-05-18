import React from 'react';
import { HomePage, LoginRegisterPage, RegisterPage, CampaignPage } from './containers';

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
	{
		path: '/campaign/:campaignId',
		component: ({
			match: {
				params: { campaignId = '' },
			},
			location: {
				state: { name = '' },
			},
		}) => <CampaignPage campaignId={campaignId} name={name} />,
	},
];
