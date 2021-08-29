import { CssBaseline } from "@material-ui/core";
import React from "react";

import { Routes } from "./routes";

const App: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<Routes />
		</>
	);
};

export default App;
