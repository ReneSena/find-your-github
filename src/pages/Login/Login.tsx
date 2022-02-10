import React from 'react';
import { useHistory } from 'react-router-dom'
import { Logo } from '../../components/Logo';
import { Button, Input,  Container, Form } from './styles';

export function LoginPage() {
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
		<Container>
			<Logo />

			<Form onSubmit={handleSubmit}>
				<Input type="text"
					placeholder="Type user name"
					value={user}
					onChange={handleChangeUser}
					autoFocus
				/>

				<Button type="submit" disabled={user.length < 3}>Sign in</Button>
			</Form>
		</Container>
	);
}