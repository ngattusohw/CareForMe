import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styles from './LoginComponent.module.css';
import { Button, Label, Input } from 'semantic-ui-react';

const submit = async (u, p, t, history, sessionId, setErrorMessage) => {
	if (!t) {
		setErrorMessage('Please select a user type');
		return;
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
	mutation Login($name: String!) {
		login(name: $name)
	}
`;


const LoginComponent = ({ name, usertype, history, setErrorMessage }) => {

	return (
		<Mutation mutation={LOGIN}>
			{(login, { data, error, loading }) => {
				if (error) return `Error! ${error.message}`;
				return (
					<button
						className={styles.submitButton}
						onClick={() => {
							var sessionId = login({ variables: { name: name } });
							submit(name, '', usertype, history, sessionId, setErrorMessage);
						}}
					>
						Submit
					</button>
				);
			}}
		</Mutation>
	);
};

export default LoginComponent;
