import React from 'react';
import { useHistory } from 'react-router-dom'

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
		<form onSubmit={handleSubmit}>
			<div>
				<label>User</label>
				<input type="text"
					placeholder="Type username"
					value={user}
					onChange={handleChangeUser}
				/>
			</div>
			<button type="submit" disabled={user.length < 3}>Sign in</button>
		</form>
	);
}