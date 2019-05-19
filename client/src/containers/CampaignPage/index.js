import React, { useState } from 'react';
import { Container, Segment, Grid, Divider, Card, Header, Icon, Feed, Button, Input, Label } from 'semantic-ui-react';
import { HomePageNavBar, DonarList } from '../../components';
import styles from './CampaignPage.module.css';

const submit = (donationAmount, setErrorMessage) => {
	if (donationAmount && typeof Number(donationAmount) == 'number') {
		setErrorMessage('');
	} else {
		setErrorMessage('Invalid Donation amount');
	}
};

const CampaignPage = ({ campaignId, name }) => {
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
								meta="Friend"
								description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
							/>
						</Grid.Column>
						<Grid.Column>
							<Segment>
								<Container>
									<p>
										{' '}
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
										eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis
										parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
										pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
										justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
										ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis
										pretium.{' '}
									</p>
								</Container>
							</Segment>
						</Grid.Column>
					</Grid>
					<Divider vertical>Info</Divider>
				</Segment>
				{errorMessage ? (
					<Header as="h4" textAlign="center" color="red">
						{errorMessage}
					</Header>
				) : null}
				<div className={styles.donateContainer}>
					<Input labelPosition="right" type="text" placeholder="Amount">
						<Label basic>$</Label>
						<input
							onChange={e => {
								setDonationAmount(e.target.value);
							}}
						/>
						<Label>.00</Label>
					</Input>
					<Button
						positive
						size="huge"
						onClick={() => {
							submit(donationAmount, setErrorMessage);
						}}
					>
						Donate Now!
					</Button>
				</div>

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
