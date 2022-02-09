import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	min-height: 100vh;

	background: rgb(149,186,237);
	background: linear-gradient(90deg, rgba(149,186,237,1) 0%, rgba(199,125,228,1) 46%, rgba(154,186,255,1) 100%);
`;

export const Input = styled.input`
	font-size: 16px;
	border-radius: 4px;
	padding: 0 16px;
	height: 40px;
	border: 1px solid #333;
	margin-bottom: 16px;
	color: #222;

	&:focus {
		border-color: #333;
		box-shadow: 0 0 0 2px #333;
		outline: none;
	}
`;

export const Button = styled.button`
	border: 0;
	border-radius: 16px;
	background-color: #222;
	padding: 0 16px;
	height: 40px;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	width: 100%;
	cursor: pointer;

	&[disabled] {
		opacity: 0.8;
		cursor: not-allowed;
	}
`;

