import styled from 'styled-components';

export const Container = styled.section`
	background-color: #232323;
	color: #f3f3f3;
	// min-height: 100vh;
	display: flex;
	justify-content: center;
`;

export const Header = styled.header`
	display: flex;
	align-items: flex-start;
	margin-top: 32px;
`;

export const Avatar = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 24px;
`;

export const WrapperInfo = styled.div`
	margin-left: 64px;

	h4 {
		font-size: 32px;
		font-weight: 700;
		margin-bottom: 32px;
	}
`;

export const ContentInfo = styled.ul`
	list-style: none;
	max-width: 450px;
	display: flex;
	margin-bottom: 32px;

	& li {
		display: flex;
		justify-content: space-between;
		margin-right: 24px;
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
