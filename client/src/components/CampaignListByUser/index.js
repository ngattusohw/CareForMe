import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Label } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styles from './CampaignListByUser.module.css';

const doctor_approved = (
	<Label as="a" color="teal" tag>
		Doctor Approved!
	</Label>
);

const CampaignListByUser = ({ history }) => {
	let userid = '6e51c7a2bcf244830db70ffa';
	const GET_CAMPAIGNS = gql`
		{
			getCampaignsFiltered(filter: { wantsApproval: true, creatorid: "${userid}" }) {
        id
        title
        description
        creatorName
        wantsApproval
        hasApproval
			}
		}
	`;

	return (
		<Query query={GET_CAMPAIGNS}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				return (
					<div className={styles.cardContainer}>
						{data.getCampaigns.map(a => (
							<div className={styles.element}>
								{a.hasApproval ? (
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
};

export default CampaignListByUser;
