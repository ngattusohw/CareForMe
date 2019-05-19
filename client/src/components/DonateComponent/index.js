import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styles from './DonateComponent.module.css';
import { Button, Label, Input } from 'semantic-ui-react';

const ADD_DONATION = gql`
	mutation AddDontation($amount: Int!, $campaignid: String!, $userid: String!) {
		donate(userid: $userid, campaignid: $campaignid, amount: $amount) {
			id
		}
	}
`;

const DonateComponent = ({ campaignId, userid }) => {
	let input;

	return (
		<Mutation mutation={ADD_DONATION}>
			{(donate, { data }) => (
				<div>
					<form
						className={styles.donateContainer}
						onSubmit={e => {
							e.preventDefault();
							donate({ variables: { amount: input.value, campaignid: campaignId, userid: userid } });
							input.value = '';
						}}
					>
						<Input labelPosition="right" type="text" placeholder="Amount">
							<Label basic>$</Label>
							<input
								ref={node => {
									input = node;
								}}
							/>
							<Label>.00</Label>
						</Input>
						<Button positive size="huge" type="submit">
							Donate Now!
						</Button>
					</form>
				</div>
			)}
		</Mutation>
	);
};

export default DonateComponent;
