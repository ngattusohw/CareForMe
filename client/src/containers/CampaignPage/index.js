import React, { useState, useEffect } from 'react';
import { Container, Segment, Grid, Divider, Card, Header, Icon, Feed } from 'semantic-ui-react';
import { HomePageNavBar } from '../../components';
import styles from './CampaignPage.module.css';

const donarList = [
	{
		name: 'Nick Gattuso',
		date: '5/12/19',
		amount: 100,
	},
];

const CampaignPage = ({ campaignId, name }) => {
	const [donars, setDonars] = useState([]);

	useEffect(() => {
		setDonars(donarList);
	}, [donarList]);
	return (
		<div>
			<HomePageNavBar />
			<div className={styles.introSection}>
				<Segment>
					<Grid columns={2} relaxed="very">
						<Grid.Column>
							<Card
								image="/images/avatar/large/elliot.jpg"
								header="Elliot Baker"
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
				<Divider horizontal>
					<Header as="h4">
						<Icon name="money" />
						Donars
					</Header>
				</Divider>
				<Segment>
					<div className={styles.feedContainer}>
						<Card>
							<Card.Content>
								<Card.Header>Recent Donators</Card.Header>
							</Card.Content>
							<Card.Content>
								<Feed>
									{donars.map(d => (
										<Feed.Event>
											<Feed.Label image="/images/avatar/small/jenny.jpg" />
											<Feed.Content>
												<Feed.Date content={d.date} />
												<Feed.Summary>{`${d.name} donated $${d.amount}`}</Feed.Summary>
											</Feed.Content>
										</Feed.Event>
									))}
								</Feed>
							</Card.Content>
						</Card>
					</div>
				</Segment>
			</div>
		</div>
	);
};

export default CampaignPage;
