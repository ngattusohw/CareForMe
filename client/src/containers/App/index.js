import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../../routes';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						{routes.map((route, i) => (
							<Route
								key={i}
								path={route.path}
								exact={route.exact}
								render={props => <route.component {...props} routes={route.routes} />}
							/>
						))}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
