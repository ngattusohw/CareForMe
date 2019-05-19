import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Button, Segment, Header } from 'semantic-ui-react';
import { CampaignApprovalList } from '../../components';

const DoctorPage = ({ history }) => {
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
