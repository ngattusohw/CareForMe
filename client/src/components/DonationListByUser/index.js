import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, Feed, Divider } from 'semantic-ui-react';
import styles from './DonationListByUser.module.css';

const DonationListByUser = ({ userid }) => {
	const GET_DONOS = gql`
    {
      getDonationsByUser(userid: "${userid}"){
        id
        date
        donatorName
        amount
      }
    }
  `;
	return (
		<Query query={GET_DONOS}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;

				return (
					<div className={styles.cardContainer}>
						<Card>
							<Card.Content>
								<Card.Header>Your recent donations</Card.Header>
							</Card.Content>
							<Card.Content>
								<Feed>
									{data.getDonationsByUser.length === 0
										? 'No donations yet! Donate Now!'
										: data.getDonationsByUser.map(d => (
												<Feed.Event>
													<Feed.Content>
														<Feed.Date
															content={new Date(d.date).toLocaleDateString('en-US')}
														/>
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

export default DonationListByUser;
