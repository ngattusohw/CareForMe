import React from 'react';
import styles from './UserPage.module.css';
import { Menu, Button, Grid, Segment, Divider } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const UserPage = ({ history }) => (
	<div>
		<Menu>
			<Menu.Item position="right">
				<Button
					onClick={() => {
						history.push('/');
					}}
				>
					Log out
				</Button>
			</Menu.Item>
		</Menu>
		<Segment>
			<Grid columns={2} relaxed="very">
				<Grid.Column>Hi</Grid.Column>
				<Grid.Column>Hi</Grid.Column>
			</Grid>

			<Divider vertical> My History </Divider>
		</Segment>
	</div>
);

export default withRouter(UserPage);
