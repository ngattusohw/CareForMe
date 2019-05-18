import React from 'react';
import { HomePageNavBar } from '../../components';
import { withRouter } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';
import styles from './HomePage.module.css';

const doctor_approved = (
	<Label as="a" color="teal" tag>
		Doctor Approved!
	</Label>
);

const tempArray = [
	{
		name: 'Elliot Baker',
		meta: '10,000 a month',
		description: 'Elliot suffers from PTSD, and requires medicine that costs 10k/month',
		doctor_approved: true,
		campaignId: '12131',
	},
	{
		name: 'Jake Collier',
		meta: '500 a month',
		description: 'Jake has type 1 diabetes, and his insurance-non reimbursable payments are upwards of 500 a month',
		campaignId: '12312124124',
	},
];

const HomePage = ({ history }) => (
	<div>
		<HomePageNavBar />
		HomePage!
		<div className={styles.cardContainer}>
			{tempArray.map(a => (
				<div className={styles.element}>
					{a.doctor_approved ? (
						<Card
							header={a.name}
							meta={a.meta}
							description={a.description}
							extra={doctor_approved}
							onClick={() => {
								history.push({
									pathname: `/campaign/${a.campaignId.toLowerCase()}`,
									state: {
										name: a.name,
									},
								});
							}}
						/>
					) : (
						<Card
							header={a.name}
							meta={a.meta}
							description={a.description}
							onClick={() => {
								history.push({
									pathname: `/campaign/${a.campaignId.toLowerCase()}`,
									state: {
										name: a.name,
									},
								});
							}}
						/>
					)}
				</div>
			))}
		</div>
	</div>
);

export default withRouter(HomePage);
