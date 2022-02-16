import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styles';

export const Page404 = () => {
	const history = useHistory();

	return(
		<Styled.Container>
			<Styled.Message>
				<h1>
					<strong>404</strong> - Page Not Found
				</h1>
				<button type="button" onClick={() => history.push('/')}>Go Back</button>
			</Styled.Message>
			<img src="https://octodex.github.com/images/NUX_Octodex.gif" alt="Page not found" width="600" />
		</Styled.Container>
	);
};