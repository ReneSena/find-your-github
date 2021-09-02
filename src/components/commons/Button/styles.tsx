import styled, { css } from 'styled-components';
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button)`
	border-radius: 0 4px 4px 0;
	height: 40px;
	opacity: 1;

	&[disabled] {
		background-color: ${props => props.theme.palette.grey[300]};
	}

	${props => props.variant === 'outlined' && css`
		color: ${props => props.theme.palette.secondary.main};
		border: 1px solid ${props => props.theme.palette.secondary.main};
		height: 32px;
		border-radius: 50px;
		padding: 0 20px;
		line-height: 32px;
		transition: all 200ms linear;
		text-transform: capitalize;
		font-weight: 600;

		&:hover {
			text-decoration: none;
			background: ${props => props.theme.palette.secondary.main};
			color: ${props => props.theme.palette.common.white};
			box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.1);
		}
	`}
`;
