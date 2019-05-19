import React from 'react';
import { Menu, Button, Grid, Segment, Divider, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { CampaignListByUser } from '../../components';
import styles from './UserPage.module.css';

const UserPage = ({ history }) => (
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
		<Segment>
			<Grid columns={2} relaxed="very">
				<Grid.Column>
					<Header as="h2" textAlign="center">
						Campaign History
					</Header>
					<CampaignListByUser />
				</Grid.Column>
				<Grid.Column>Hi</Grid.Column>
			</Grid>

			<Divider vertical> My History </Divider>
		</Segment>
	</div>
);

export default withRouter(UserPage);
