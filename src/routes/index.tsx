import { BrowserRouter, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components/commons/Loader";

const LoginPage = lazy(() => import("../pages/Login/Login"));
const ProfilePage = lazy(() => import("../pages/Home/Home"));
const Page404 = lazy(() => import("../pages/404/404"));

export function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route path="*" component={Page404} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
