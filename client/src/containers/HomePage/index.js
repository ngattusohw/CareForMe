import React from 'react';
import { HomePageNavBar } from '../../components';
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
	},
	{
		name: 'Jake Collier',
		meta: '500 a month',
		description: 'Jake has type 1 diabetes, and his insurance-non reimbursable payments are upwards of 500 a month',
	},
];

const HomePage = () => (
	<div>
		<HomePageNavBar />
		HomePage!
		<div className={styles.cardContainer}>
			{tempArray.map(a => (
				<div className={styles.element}>
					{a.doctor_approved ? (
						<Card header={a.name} meta={a.meta} description={a.description} extra={doctor_approved} />
					) : (
						<Card header={a.name} meta={a.meta} description={a.description} />
					)}
				</div>
			))}
		</div>
	</div>
);

export default HomePage;
