import { Card, List } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
	margin-top: 60px;
	width: 500px;
	height: 300px;

	& .MuiCardContent-root {
		padding: 0;
	}
`;

export const StyledList = styled(List)`
	padding: 0;

	& li {
		width: 200px;
		height: 100px;
		background-color: #d7d8ff;
		border-radius: 5px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		&:not(:last-child) {
			border-bottom: 1px solid #fff;
		}

		h2 {
			font-size: 24px;
			font-weight: 700;
			color: #222;
			margin: 0;
		}

		h3 {
			font-size: 16px;
			font-weight: 400;
			color: #555;
			margin: 0;
		}
	}
`;
