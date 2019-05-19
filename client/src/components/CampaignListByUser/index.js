import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Label } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styles from './CampaignListByUser.module.css';
import shortid from 'shortid';

const doctor_approved = (
	<Label as="a" color="teal" tag>
		Doctor Approved!
	</Label>
);

const CampaignListByUser = ({ history, userid }) => {
	const GET_CAMPAIGNS = gql`
		{
			getCampaignsFiltered(filter: { wantsApproval: true, creatorid: "${userid}" }) {
        id
        title
        description
        creatorName
        wantsApproval
        hasApproval
        goal
			}
		}
	`;

	return (
		<Query query={GET_CAMPAIGNS}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				return (
					<div className={styles.cardContainer} key={shortid.generate()}>
						{data.getCampaignsFiltered.length === 0
							? 'No campaigns yet! Create one below'
							: data.getCampaignsFiltered.map(a => (
									<div className={styles.element} key={shortid.generate()}>
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

export default withRouter(CampaignListByUser);
