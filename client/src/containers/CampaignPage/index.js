import React from 'react';
import { Container } from 'semantic-ui-react';
import { HomePageNavBar } from '../../components';

const CampaignPage = ({ campaignId, name }) => {
	return (
		<div>
			<HomePageNavBar />
			<Container>
				<div>{name}</div>
			</Container>
		</div>
	);
};

export default CampaignPage;
