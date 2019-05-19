import React, { useState, useEffect } from 'react';
import { Menu, Button, Card, Segment, Feed, Icon, Header } from 'semantic-ui-react';
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

const DoctorPage = () => {
	const [approvalQueue, setApprovalQueue] = useState([]);

	useEffect(() => {
		setApprovalQueue(temporary_queue);
	}, [temporary_queue]);

	return (
		<div>
			<Menu>
				<Menu.Item position="right">
					<Button>Log out</Button>
				</Menu.Item>
			</Menu>
			<Header as="h2" textAlign="center">
				Welcome, Dr.
			</Header>
			<Segment>
				<div className={styles.feedContainer}>
					<Feed>
						{approvalQueue.map(c => (
							<Card key={c.name}>
								<Card.Content>
									{/* <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg" /> */}
									<Card.Header>{c.name}</Card.Header>
									<Card.Meta>{c.amount}</Card.Meta>
									<Card.Description>{c.description}</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className="ui two buttons">
										<Button
											basic
											color="green"
											onClick={() => {
												submit(true, c.campaignId);
											}}
										>
											Approve
										</Button>
										<Button
											basic
											color="red"
											onClick={() => {
												submit(false, c.campaignId);
											}}
										>
											Decline
										</Button>
									</div>
								</Card.Content>
							</Card>
						))}
					</Feed>
					<Button fluid onClick={() => {}} content="Load more" />
				</div>
			</Segment>
		</div>
	);
};

export default DoctorPage;
