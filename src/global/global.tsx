import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body, input, button, select {
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 400;
		outline: none;
	}
`;