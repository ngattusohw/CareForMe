import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styles from './CreateCampaign.module.css';
import { Label, Button, Input, Checkbox } from 'semantic-ui-react';

const CREATE_CAMPAIGN = gql`
	mutation CreateCampaign(
		$title: String!
		$description: String!
		$creatorid: ID!
		$goal: Int!
		$recurring: Boolean!
		$wantsApproval: Boolean!
		$creatorName: String!
	) {
		createCampaign(
			title: String
			description: $description
			creatorid: $creatorid
			goal: $goal
			recurring: $recurring
			wantsApproval: $wantsApproval
			creatorName: $creatorName
		) {
			id
		}
	}
`;

const CreateCampaign = ({ userid }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [goal, setGoal] = useState('');
	const [creatorName, setCreatorName] = useState('');

	return (
		<Mutation mutation={CREATE_CAMPAIGN}>
			{(createCampaign, { data, error, loading }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				return (
					<div className={styles.container}>
						<Input
							type="text"
							className={styles.element}
							placeholder="Campaign Title"
							onChange={e => {
								setTitle(e.target.value);
							}}
						/>
						<Input
							type="text"
							className={styles.element}
							placeholder="Campaign Description"
							onChange={e => {
								setDescription(e.target.value);
							}}
						/>
						<div className={styles.element}>
							<Input labelPosition="right" type="text" placeholder="Goal">
								<Label basic>$</Label>
								<input
									onChange={e => {
										setGoal(e.target.value);
									}}
								/>
								<Label>.00</Label>
							</Input>
						</div>
						<Input
							type="text"
							className={styles.element}
							placeholder="Creator Name"
							onChange={e => {
								setCreatorName(e.target.value);
							}}
						/>
						<Checkbox className={styles.element} toggle label={{ children: 'Requires Doctor Approval' }} />
						<Checkbox className={styles.element} toggle label={{ children: 'Recurring' }} />
						<Button
							className={styles.element}
							positive
							size="small"
							onClick={() => {
								console.log(userid, goal, title, description);
								// createCampaign({
								// 	variables: {
								// 		title: title,
								// 		description: description,
								// 		creatorid: userid,
								// 		creatorName: creatorName

								// 	},
								// });
							}}
						>
							Create a Campaign!
						</Button>
					</div>
				);
			}}
		</Mutation>
	);
};

export default CreateCampaign;
