import { StylesProvider } from "@material-ui/core";
import { ThemeProvider  } from 'styled-components'
import React from "react";

import { Routes } from "./routes";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./global/global";

const App: React.FC = () => {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Routes />
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
