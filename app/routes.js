import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentStream from './containers/CurrentStream';
import ShowsList from './containers/ShowsList';
import BroadcastsList from './containers/BroadcastsList';

export default (
	<Switch>
		<Route exact path="/" component={CurrentStream} />
		<Route exact path="/broadcasts" component={BroadcastsList} />
		<Route exact path="/shows" component={ShowsList} >
			<Route exact path="/:showId" component={BroadcastsList} />
		</Route>
	</Switch>
);
