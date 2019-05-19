import React, { useState, Component } from 'react';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import styles from './LoginComponent.module.css';
import { Button, Label, Input } from 'semantic-ui-react';

const submit = async (u, p, t, history, sessionId, setErrorMessage) => {
	if (!t) {
		setErrorMessage('Please select a user type');
		return;
	}
	if (!sessionId) {
		setErrorMessage('Invalid Username or Password ');
	}
	try {
		console.log(u + " : " + sessionId);
		history.push({
			pathname: `/${t.toLowerCase()}/1`,
			state: {
				username: u,
			},
		});
	} catch (e) {
		setErrorMessage('Login failed! Username or password is incorrect');
	}
};


const LOGIN = gql`
	query Login($name: String!) {
		login(name: $name)
	}
`;

class DelayedQuery extends Component {
	state = {session_id: null};

	onLoginFetched = session_id => this.setState(() => ({ session_id }));

	render() {
		return (
			<ApolloConsumer>
				{ client => (
					<button
						className={styles.submitButton}
						onClick={async () => {
							const { data } = await client.query({query: LOGIN, variables: {name: this.state.username}});
							this.onLoginFetched(data);
							console.log(data);
							//submit(name, '', this.state.usertype, this.state.history, data.login, setErrorMessage);
						}}
					>
						Submit
					</button>
				)}
			</ApolloConsumer>
		)
	}
}

/*
const LoginComponent = ({ name, usertype, history }) => {
	const [errorMessage, setErrorMessage] = useState('');
	var session_id;
	return (
		<Query query={LOGIN} variables={{ name }}>
			{({ data, error, loading }) => {
				if (error) return `Error! ${error.message}`;
				return (
					<button
						className={styles.submitButton}
						onClick={() => {
							console.log(data.login);
							submit(name, '', usertype, history, data.login, setErrorMessage);
						}}
					>
						Submit
					</button>
				);
			}}
		</Query>
	);
};
*/
export default DelayedQuery;
