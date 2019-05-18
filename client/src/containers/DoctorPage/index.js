import React, { useState, useEffect } from 'react';
import { Menu, Button, Card, Segment, Feed, Icon, Header } from 'semantic-ui-react';

const DoctorPage = () => {
	const [approvalQueue, setApprovalQueue] = useState([]);

	useEffect(() => {}, []);

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
				<Feed>
					<Card>
						<Card.Content>
							{/* <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg" /> */}
							<Card.Header>Steve Sanders</Card.Header>
							<Card.Meta>Friends of Elliot</Card.Meta>
							<Card.Description>
								Steve wants to add you to the group <strong>best friends</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<Button basic color="green">
									Approve
								</Button>
								<Button basic color="red">
									Decline
								</Button>
							</div>
						</Card.Content>
					</Card>
				</Feed>
			</Segment>
		</div>
	);
};

export default DoctorPage;
