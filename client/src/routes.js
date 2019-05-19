import React from 'react';
import { HomePage, LoginRegisterPage, RegisterPage, CampaignPage, DoctorPage, UserPage } from './containers';

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
				state: { name = '', description = '', goal = '', title = '', date = '' },
			},
		}) => (
			<CampaignPage
				campaignId={campaignId}
				name={name}
				description={description}
				goal={goal}
				title={title}
				date={date}
			/>
		),
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
	{
		path: '/user/:userid',
		exact: true,
		component: ({
			match: {
				params: { userid = '' },
			},
		}) => <UserPage userid={userid} />,
	},
];
