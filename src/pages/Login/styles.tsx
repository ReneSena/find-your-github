import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	flex-direction: column;
	min-height: 100vh;
	background: linear-gradient(230deg, rgba(149,186,237,1) 0%, rgba(199,125,228,1) 46%, rgba(154,186,255,1) 100%);
`;

export const Form = styled.form`
	margin-top: 24px;
	margin-left: 24px;
	margin-right: 24px;

	@media (min-width: 780px) {
		width: 300px;
		margin-left: 0;
		margin-right: 0;
	}
`;

export const Input = styled.input`
	width: 100%;
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
		background: #4f4e4e;
		cursor: not-allowed;
	}
`;

export const Title = styled.h3`
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	margin-top: 12px;
`;

export const SubTitle = styled.h6`
	width: 250px;
	text-align: center;
	font-size: 16px;
	font-weight: 400;
	margin-top: 8px;
`;
