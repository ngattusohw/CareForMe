import React from 'react';
import { HomePage, LoginRegisterPage, RegisterPage, CampaignPage, DoctorPage } from './containers';

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
				state: { name = '', description = '', goal = '', title = '' },
			},
		}) => <CampaignPage campaignId={campaignId} name={name} description={description} goal={goal} title={title} />,
	},
	{
		path: '/doctor/:doctorId',
		exact: true,
		component: ({
			match: {
				params: { doctorId = '' },
			},
		}) => <DoctorPage doctorId={doctorId} />,
	},
];
