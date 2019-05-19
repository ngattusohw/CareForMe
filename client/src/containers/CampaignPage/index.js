import React from 'react';
import { Container, Segment, Grid, Divider, Card, Header, Icon } from 'semantic-ui-react';
import { HomePageNavBar, DonarList, DonateComponent } from '../../components';
import styles from './CampaignPage.module.css';

const CampaignPage = ({ campaignId, name, title, description, goal, date }) => {
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
				<DonateComponent campaignId={campaignId} userid={'6e51c7a2bcf244830db70ffa'} />
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
