import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { withRouter } from 'react-router-dom';
import styles from './LoginRegisterPage.module.css';
import img from '../../images/logo_transparent.png';

const submit = async (u, p, t, history, setErrorMessage) => {
	if (!t) {
		setErrorMessage('Please select a user type');
		return;
	}
	try {
		// const resp = await postLoginUser(u, p, t);
		// if (resp.success) {
		// 	setErrorMessage('');
		// 	history.push({
		// 		pathname: `/${t.toLowerCase()}`,
		// 		state: {
		// 			username: u,
		// 		},
		// 	});
		// }
		history.push({
			pathname: `/${t.toLowerCase()}`,
			state: {
				username: u,
			},
		});
	} catch (e) {
		setErrorMessage('Login failed! Username or password is incorrect');
	}
};

const LoginRegisterPage = ({ history }) => {
	const [usertype, setUserType] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		// loggedIn().then(resp => {
		// 	if (resp.success) history.push(`/${resp.user.role}`);
		// });
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.buttonContainer}>
				<div className={styles.authForm}>
					<img src={img} className={styles.logo} alt="CareForMe Logo" />
					<div className={styles.roleButtonContainer}>
						{['User', 'Doctor'].map(role => (
							<button
								key={shortid.generate()}
								className={`${styles.roleButton} ${usertype === role ? styles.selectedUserType : ''}`}
								onClick={() => setUserType(role)}
							>
								{role}
							</button>
						))}
					</div>
					{errorMessage ? <h3 style={{ color: 'red' }}>{errorMessage}</h3> : null}
					<input type="text" placeholder={'Username'} onChange={e => setUsername(e.target.value)} />
					<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
					<button
						className={styles.submitButton}
						onClick={() => submit(username, password, usertype, history, setErrorMessage)}
					>
						Submit
					</button>
				</div>
			</div>
			<a
				className={styles.registerLink}
				onClick={() => {
					history.push('/register');
				}}
			>
				Dont have an account? Register here!
			</a>
		</div>
	);
};

export default withRouter(LoginRegisterPage);
