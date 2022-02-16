import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginPage } from '../pages/Login/Login';
import { ProfilePage } from '../pages/Home';
import { Page404 } from '../pages/404/404';

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route path="*" component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}