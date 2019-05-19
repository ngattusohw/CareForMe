import React from 'react';
import { HomePageNavBar, CampaignList } from '../../components';
import { withRouter } from 'react-router-dom';
import { Icon, Header, Divider, Segment, Grid, Message } from 'semantic-ui-react';
import styles from './HomePage.module.css';
import img from '../../images/logo_transparent.png';

const HomePage = ({ history }) => {
	return (
		<div>
			<HomePageNavBar />
			<Segment>
				<Grid columns={2} relaxed="very">
					<Grid.Column>
						<img src={img} className={styles.logo} alt="CareForMe Logo" />
					</Grid.Column>
					<Grid.Column>
						<Message
							icon="question circle outline"
							header="Why CareForMe?"
							content=" According to The Commonwealth Fund, over 79 million americans are currently experiencing problems with medical bills, or paying off medical debt."
						/>
						<Message
							icon="medkit"
							header="What is CareForMe?"
							content=" Our service will allow patients and their families to crowdsource money for their medical payments."
						/>
						<Message
							icon="heartbeat"
							header="How do I use CareForMe?"
							content="View current campaigns, donate to them, or create your own campaign!"
						/>
					</Grid.Column>
				</Grid>

				<Divider vertical> About</Divider>
			</Segment>
			<Divider horizontal>
				<Header as="h4">
					<Icon name="tag" />
					Active Campaigns
				</Header>
			</Divider>
			<CampaignList />
		</div>
	);
};

export default withRouter(HomePage);
