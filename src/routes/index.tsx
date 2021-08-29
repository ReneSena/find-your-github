import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home'

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
		</BrowserRouter>
	);
}