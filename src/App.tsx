import { CssBaseline, StylesProvider } from "@material-ui/core";
import { ThemeProvider  } from 'styled-components'
import React from "react";

import { Routes } from "./routes";
import { theme } from "./theme/theme";

const App: React.FC = () => {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes />
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
