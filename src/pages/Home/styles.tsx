import styled from 'styled-components';

export const Container = styled.section`
	background-color: #232323;
	color: #f3f3f3;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Header = styled.header`
	text-align: center;

	h4 {
		font-size: 20px;
		font-weight: 700;
	}
`;

export const Avatar = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin-bottom: 24px;
`;

export const ContentInfo = styled.ul`
	list-style: none;
	margin: 32px 40px;
	width: calc(100% - 80px);
	max-width: 300px;

	& li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
	}
`;

export const Button = styled.a`
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 16px;
	height: 32px;
	border: 1px solid #8937a4;
	color: #d09aec;
	border-radius: 4px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #8937a4;
		color: #fff;
	}
`;
