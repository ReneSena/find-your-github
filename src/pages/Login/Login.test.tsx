import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { LoginPage } from './Login';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: jest.fn()
	})
}));

describe('<Login />', () => {
	test('should render a Login Component', () => {
		render(<LoginPage />);

		expect(screen.getByPlaceholderText('Type username')).toBeInTheDocument();
	});

	test('should write on field user', () => {
		render(<LoginPage />);

		const inputUser = screen.getByPlaceholderText('Type username');
		userEvent.type(inputUser, 'ReneSena');

		expect(inputUser).toHaveValue('ReneSena');
	});

	test('should send a name to profile page', async () => {
		const history = createMemoryHistory();
		history.push('/profile');

		render(
			<Router history={history}>
				<LoginPage />
			</Router>
		);

		const inputUser = screen.getByPlaceholderText('Type username');
		userEvent.type(inputUser, 'ReneSena');

		const buttonSubmit = screen.getByRole('button',
			{ name: 'Sign in' }
		);

		userEvent.click(buttonSubmit);


		expect(history.location.pathname).toBe('/profile')
	});
});