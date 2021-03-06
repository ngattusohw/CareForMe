import React from 'react';
import { Menu, Button, Grid, Segment, Divider, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { CampaignListByUser, DonationListByUser, CreateCampaign } from '../../components';

const UserPage = ({ history, userid }) => (
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
					<CampaignListByUser userid={userid} />
				</Grid.Column>
				<Grid.Column>
					<Header as="h2" textAlign="center">
						Donation History
					</Header>
					<DonationListByUser userid={userid} />
				</Grid.Column>
			</Grid>

			<Divider vertical> My History </Divider>
		</Segment>
		<Segment>
			<Header as="h2" textAlign="center">
				Create a Campaign!
			</Header>
			<CreateCampaign userid={userid} />
		</Segment>
	</div>
);

export default withRouter(UserPage);
