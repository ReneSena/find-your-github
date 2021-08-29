import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
	background: #fff;
	width: 400px;

	& .MuiOutlinedInput-root {
		border-radius: 4px 0 0 4px;
	}
`;