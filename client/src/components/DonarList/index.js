import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, Feed, Divider } from 'semantic-ui-react';
import styles from './DonarList.module.css';

const DonarList = ({ campaignId }) => {
	const GET_DONORS = gql`
    {
      getDonationsByCampaign(campaignid: "${campaignId}"){
        id
        amount
        date
        donatorName
      }
    }
  `;
	return (
		<Query query={GET_DONORS}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;

				return (
					<div className={styles.feedContainer}>
						<Card>
							<Card.Content>
								<Card.Header>Recent Donators</Card.Header>
							</Card.Content>
							<Card.Content>
								<Feed>
									{data.getDonationsByCampaign.map(d => (
										<Feed.Event>
											<Feed.Content>
												<Feed.Date content={new Date(d.date).toLocaleDateString('en-US')} />
												<Feed.Summary>{`${
													d.donatorName ? d.donatorName : `Anonymous`
												} donated $${d.amount}`}</Feed.Summary>
												<Divider />
											</Feed.Content>
										</Feed.Event>
									))}
								</Feed>
							</Card.Content>
						</Card>
					</div>
				);
			}}
		</Query>
	);
};

export default DonarList;
