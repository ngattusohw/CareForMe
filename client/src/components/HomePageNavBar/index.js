import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './HomePageNavBar.module.css';

const HomePageNavBar = ({ history }) => (
	<div>
		<ul className={styles.container}>
			<li className={styles.element}>
				<a>CareForMe</a>
			</li>
			<li className={styles.element} style={{ float: 'right' }}>
				<a
					className={styles.active}
					onClick={() => {
						history.push('/login');
					}}
				>
					Login
				</a>
			</li>
		</ul>
	</div>
);

export default withRouter(HomePageNavBar);
