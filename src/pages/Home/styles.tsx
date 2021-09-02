import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
	background-color: ${props => props.theme.palette.grey[200]};
	width: 100%;
	height: 200px;
	display: block;
	position: relative;
	top: 0;
	left: 0;
	border-bottom: 1px solid ${props => props.theme.palette.grey[400]};
	z-index: 0;
`;