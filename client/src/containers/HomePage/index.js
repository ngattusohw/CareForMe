import React, { useState, useEffect } from 'react';
import { HomePageNavBar } from '../../components';
import { withRouter } from 'react-router-dom';
import { Card, Icon, Label, Button, Header, Divider, Segment, Grid, Message } from 'semantic-ui-react';
import styles from './HomePage.module.css';
import img from '../../images/logo_transparent.png';

const doctor_approved = (
	<Label as="a" color="teal" tag>
		Doctor Approved!
	</Label>
);

const tempArray = [
	{
		name: 'Elliot Baker',
		meta: '10,000 a month',
		description: 'Elliot suffers from PTSD, and requires medicine that costs 10k/month',
		doctor_approved: true,
		campaignId: '12131',
	},
	{
		name: 'Elliot Baker',
		meta: '10,000 a month',
		description: 'Elliot suffers from PTSD, and requires medicine that costs 10k/month',
		doctor_approved: true,
		campaignId: '542',
	},
	{
		name: 'Elliot Baker',
		meta: '10,000 a month',
		description: 'Elliot suffers from PTSD, and requires medicine that costs 10k/month',
		doctor_approved: true,
		campaignId: '876',
	},
	{
		name: 'Jake Collier',
		meta: '500 a month',
		description: 'Jake has type 1 diabetes, and his insurance-non reimbursable payments are upwards of 500 a month',
		campaignId: '12312124124',
	},
];

const loadFunc = (cardItems, setCardItems) => {
	setCardItems([
		...cardItems,
		{
			name: 'Jake Collier',
			meta: '500 a month',
			description:
				'Jake has type 1 diabetes, and his insurance-non reimbursable payments are upwards of 500 a month',
			campaignId: toString(Math.floor(Math.random() * 100 + 1)),
		},
	]);
};

const HomePage = ({ history }) => {
	const [cardItems, setCardItems] = useState([]);
	useEffect(() => {
		setCardItems(tempArray);
	}, []);

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
			<div className={styles.cardContainer}>
				{cardItems.map(a => (
					<div className={styles.element}>
						{a.doctor_approved ? (
							<Card
								header={a.name}
								meta={a.meta}
								description={a.description}
								extra={doctor_approved}
								onClick={() => {
									history.push({
										pathname: `/campaign/${a.campaignId.toLowerCase()}`,
										state: {
											name: a.name,
										},
									});
								}}
							/>
						) : (
							<Card
								header={a.name}
								meta={a.meta}
								description={a.description}
								onClick={() => {
									history.push({
										pathname: `/campaign/${a.campaignId.toLowerCase()}`,
										state: {
											name: a.name,
										},
									});
								}}
							/>
						)}
					</div>
				))}
				<Button
					onClick={() => {
						loadFunc(cardItems, setCardItems);
					}}
				>
					Load more
				</Button>
			</div>
		</div>
	);
};

export default withRouter(HomePage);
