import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Results } from "./Results";

export const RouteShow = () => (
	<div className="p-4">
		<Switch>
			<Route exact path="/">
				<Redirect to="/" />
				<Results />
			</Route>
			{/* <Route exact path={["/organicResults", "/images", "/news", "/videos"]}>
			</Route> */}
		</Switch>
	</div>
);
