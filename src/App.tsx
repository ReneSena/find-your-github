import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";

import { Routes } from "./routes";
import { theme } from "./theme/theme";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	);
};

export default App;
