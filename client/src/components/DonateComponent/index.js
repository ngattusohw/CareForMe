import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styles from './DonateComponent.module.css';
import { Button, Label, Input } from 'semantic-ui-react';

const ADD_DONATION = gql`
	mutation AddDonation($amount: Int!, $campaignid: ID!, $userid: ID!, $donatorName: String!) {
		donate(userid: $userid, campaignid: $campaignid, amount: $amount, donatorName: $donatorName) {
			id
		}
	}
`;

const DonateComponent = ({ campaignId, userid, donatorName }) => {
	const [donationValue, setDonationValue] = useState(0);

	return (
		<Mutation mutation={ADD_DONATION}>
			{(donate, { data, error, loading }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				return (
					<div className={styles.donateContainer}>
						<Input labelPosition="right" type="text" placeholder="Amount">
							<Label basic>$</Label>
							<input
								onChange={e => {
									setDonationValue(e.target.value);
								}}
							/>
							<Label>.00</Label>
						</Input>
						<Button
							positive
							size="huge"
							onClick={() => {
								console.log(userid, campaignId, donationValue);
								donate({
									variables: {
										amount: parseInt(donationValue, 10),
										campaignid: campaignId,
										userid: userid,
										donatorName: donatorName ? donatorName : 'Anonymous',
									},
								});
							}}
						>
							Donate Now!
						</Button>
					</div>
				);
			}}
		</Mutation>
	);
};

export default DonateComponent;
