import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Input,  Container } from './styles';

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
			<form onSubmit={handleSubmit}>
				<div>
					<Input type="text"
						placeholder="Type user name"
						value={user}
						onChange={handleChangeUser}
						autoFocus
					/>
				</div>
				<Button type="submit" disabled={user.length < 3}>Sign in</Button>
			</form>
		</Container>
	);
}