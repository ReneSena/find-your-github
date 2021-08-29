import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
	margin-top: 60px;
	width: 500px;
	height: 300px;

	& .MuiCardContent-root {
		padding: 0;
	}
`;
