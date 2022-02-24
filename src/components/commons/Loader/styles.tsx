import styled, { keyframes } from "styled-components";

const animation = keyframes`
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
`;

export const Container = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%);

	& div {
		position: absolute;
		border: 4px solid #920abb;
		opacity: 1;
		border-radius: 50%;
		animation: ${animation} 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	& div:nth-child(2) {
		animation-delay: -0.5s;
	}
`;
