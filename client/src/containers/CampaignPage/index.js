import React, { useState } from 'react';
import { Container, Segment, Grid, Divider, Card, Header, Icon, Feed, Button, Input, Label } from 'semantic-ui-react';
import { HomePageNavBar, DonarList, DonateComponent } from '../../components';
import styles from './CampaignPage.module.css';

const submit = (donationAmount, setErrorMessage) => {
	if (donationAmount && typeof Number(donationAmount) == 'number') {
		setErrorMessage('');
	} else {
		setErrorMessage('Invalid Donation amount');
	}
};

const CampaignPage = ({ campaignId, name, title, description, goal }) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [donationAmount, setDonationAmount] = useState('');

	return (
		<div>
			<HomePageNavBar />
			<div className={styles.introSection}>
				<Segment>
					<Grid columns={2} relaxed="very">
						<Grid.Column>
							<Card
								image="/images/avatar/large/elliot.jpg"
								header={name}
								description={`${name} is seeking ${goal}`}
							/>
						</Grid.Column>
						<Grid.Column>
							<Segment>
								<Container>
									<Header as="h2">{title}</Header>
									<p>{description}</p>
								</Container>
							</Segment>
						</Grid.Column>
					</Grid>
					<Divider vertical>Info</Divider>
				</Segment>
				<DonateComponent campaignId={campaignId} />
				<Divider horizontal>
					<Header as="h4">
						<Icon name="money" />
						Donars
					</Header>
				</Divider>
				<Segment>
					<DonarList campaignId={campaignId} />
				</Segment>
			</div>
		</div>
	);
};

export default CampaignPage;
