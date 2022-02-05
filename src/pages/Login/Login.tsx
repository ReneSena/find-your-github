import React from 'react';

export function LoginPage() {
	return (
		<form>
			<div>
				<label>User</label>
				<input type="text" placeholder="Type username" />
			</div>
			<button type="button">Sign in</button>
		</form>
	);
}