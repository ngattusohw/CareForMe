import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Button, Card } from 'semantic-ui-react';
import styles from './CampaignApprovalList.module.css';

const submit = () => {
	return;
};

const GET_CAMPAIGNS = gql`
	{
		getCampaignsFiltered(filter: { wantsApproval: true, hasApproval: false }) {
			id
			description
			goal
			title
			creatorName
		}
	}
`;

const CampaignApprovalList = () => (
	<Query query={GET_CAMPAIGNS}>
		{({ loading, error, data }) => {
			if (loading) return 'Loading...';
			if (error) return `Error! ${error.message}`;
			return (
				<div className={styles.feedContainer}>
					{data.getCampaignsFiltered.length === 0
						? 'No campaigns to approve!'
						: data.getCampaignsFiltered.map(c => (
								<Card key={c.id}>
									<Card.Content>
										{/* <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg" /> */}
										<Card.Header>{c.title}</Card.Header>
										<Card.Meta>{`${c.creatorName} wants to raise $${c.goal}`}</Card.Meta>
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
				</div>
			);
		}}
	</Query>
);

export default CampaignApprovalList;
