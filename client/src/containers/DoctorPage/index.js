import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Button, Card, Segment, Feed, Icon, Header } from 'semantic-ui-react';
import { CampaignApprovalList } from '../../components';
import styles from './DoctorPage.module.css';

const submit = (status, cId) => {
	if (status) {
		//approve it
	} else {
		//deny
	}
};

const temporary_queue = [
	{
		name: 'Jake Collier',
		description: 'Hi',
		amount: '100',
		campaignId: '12313',
	},
];

const DoctorPage = ({ history }) => {
	const [approvalQueue, setApprovalQueue] = useState([]);

	useEffect(() => {
		setApprovalQueue(temporary_queue);
	}, [temporary_queue]);

	return (
		<div>
			<Menu>
				<Menu.Item position="right">
					<Button
						onClick={() => {
							history.push('/');
						}}
					>
						Log out
					</Button>
				</Menu.Item>
			</Menu>
			<Header as="h2" textAlign="center">
				Welcome, Dr.
			</Header>
			<Segment>
				<CampaignApprovalList />
			</Segment>
		</div>
	);
};

export default withRouter(DoctorPage);
