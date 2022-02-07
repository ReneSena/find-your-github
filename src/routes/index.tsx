import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginPage } from '../pages/Login/Login';
import { ProfilePage } from '../pages/Home';

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route path="*" component={() => <div>Page Not Found - 404</div>} />
			</Switch>
		</BrowserRouter>
	);
}