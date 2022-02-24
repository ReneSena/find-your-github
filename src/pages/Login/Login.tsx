import React from 'react';
import { useHistory } from 'react-router-dom'
import { Logo } from '../../components/Logo';
import * as Styled from './styles';

const LoginPage = () => {
	const history = useHistory();
	const [user, setUser] = React.useState<string>('');

	const handleChangeUser = (event: React.BaseSyntheticEvent) => {
		setUser(event.target.value);
	}

	const handleSubmit = (event: React.BaseSyntheticEvent) => {
		event.preventDefault();

		history.push(`/profile?name=${user}`);
	}

	return (
		<Styled.Container>
			<Logo />
			<Styled.Title>Bem-vindo</Styled.Title>
			<Styled.SubTitle>Conheça o perfil de milhares de desenvoldedores</Styled.SubTitle>

			<Styled.Form onSubmit={handleSubmit}>
				<Styled.Input type="text"
					placeholder="Type user name"
					value={user}
					onChange={handleChangeUser}
					autoFocus
				/>
				<Styled.Button type="submit" disabled={user.length < 3}>Sign in</Styled.Button>
			</Styled.Form>
		</Styled.Container>
	);
}

export default LoginPage;