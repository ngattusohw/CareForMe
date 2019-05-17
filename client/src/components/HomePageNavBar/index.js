import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './HomePageNavBar.module.css';

const HomePageNavBar = ({ history }) => (
	<div>
		<ul className={styles.container}>
			<li className={styles.element}>
				<div>CareForMe</div>
			</li>
			<li className={styles.element} style={{ float: 'right' }}>
				<div
					className={styles.active}
					onClick={() => {
						history.push('/login');
					}}
				>
					Login
				</div>
			</li>
		</ul>
	</div>
);

export default withRouter(HomePageNavBar);
