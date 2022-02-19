import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Message = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	& h1 {
		font-size: 32px;
		font-weight: 400;
		margin-bottom: 16px;

		& strong {
			font-size: 40px;
			font-weight: 600;
		}
	}

	& button {
		padding: 0 20px;
		height: 32px;
		background-color: #b721b7;
		border-radius: 4px;
		border: 1px solid #b721b7;
		color: #fff;
		font-size: ;
		font-weight: 600;
		cursor: pointer;
	}
`;
