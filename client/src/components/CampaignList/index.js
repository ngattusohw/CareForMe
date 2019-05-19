import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styles from './CampaignList.module.css';

const doctor_approved = (
	<Label as="a" color="teal" tag>
		Doctor Approved!
	</Label>
);

const GET_CAMPAIGNS = gql`
	{
		getCampaigns {
			id
			description
			wantsApproval
			goal
			title
			creatorName
			date
		}
	}
`;

const CampaignList = ({ history }) => (
	<Query query={GET_CAMPAIGNS}>
		{({ loading, error, data }) => {
			if (loading) return 'Loading...';
			if (error) return `Error! ${error.message}`;
			return (
				<div className={styles.cardContainer}>
					{data.getCampaigns.map(a => (
						<div className={styles.element}>
							{a.wantsApproval ? (
								<Card
									key={a.id}
									header={a.title}
									meta={`Goal of $${a.goal}`}
									description={a.description}
									extra={doctor_approved}
									onClick={() => {
										history.push({
											pathname: `/campaign/${a.id.toLowerCase()}`,
											state: {
												name: a.creatorName,
												description: a.description,
												goal: a.goal,
												title: a.title,
												date: a.date,
											},
										});
									}}
								/>
							) : (
								<Card
									key={a.id}
									header={a.title}
									meta={`${a.creatorName} has a goal of $${a.goal}`}
									description={a.description}
									onClick={() => {
										history.push({
											pathname: `/campaign/${a.id.toLowerCase()}`,
											state: {
												name: a.creatorName,
												description: a.description,
												goal: a.goal,
												title: a.title,
												date: a.date,
											},
										});
									}}
								/>
							)}
						</div>
					))}
				</div>
			);
		}}
	</Query>
);

export default withRouter(CampaignList);
