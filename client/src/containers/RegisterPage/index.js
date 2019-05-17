import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';
import styles from './RegisterPage.module.css';
import img from '../../images/logo_transparent.png';

const submit = async (u, p, secondPassword, t, history, setErrorMessage) => {
	if (!t) {
		setErrorMessage('Please select a user type');
		return;
	}
	if (!u || !p) {
		setErrorMessage('Please fill out all fields');
		return;
	}
	if (p !== secondPassword) {
		setErrorMessage('Passwords need to match!');
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
		history.push('/login');
	} catch (e) {
		setErrorMessage('Login failed! Username or password is incorrect');
	}
};

const RegisterPage = ({ history }) => {
	const [usertype, setUserType] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [secondPassword, setSecondPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	return (
		<div className={styles.container}>
			<div className={styles.buttonContainer}>
				<div className={styles.authForm}>
					<img
						src={img}
						className={styles.logo}
						alt="CareForMe Logo"
						onClick={() => {
							history.push('/');
						}}
					/>
					{errorMessage ? <h3 style={{ color: 'red' }}>{errorMessage}</h3> : null}
					Username: <input type="text" placeholder={'Username'} onChange={e => setUsername(e.target.value)} />
					Password:{' '}
					<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
					Retype Password:{' '}
					<input
						type="password"
						placeholder="Re-type password"
						onChange={e => setSecondPassword(e.target.value)}
					/>
					I am a....
					<div className={styles.radio}>
						<input
							type="radio"
							name="group1"
							value="Doctor"
							className={styles.radioChild}
							onChange={e => {
								setUserType(e.target.value);
							}}
						/>
						<p className={styles.radioChild}>Doctor</p>
					</div>
					<div className={styles.radio}>
						<input
							type="radio"
							name="group1"
							value="User"
							className={styles.radioChild}
							oncChange={e => {
								setUserType(e.target.value);
							}}
						/>
						<p className={styles.radioChild}>User</p>
					</div>
					<button
						className={styles.submitButton}
						onClick={() => submit(username, password, secondPassword, usertype, history, setErrorMessage)}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(RegisterPage);
