import { api } from '../services/api';

interface User {
	name: string;
	avatar: string;
	followers: number;
	following: number;
	profile: string;
	dateCreated: string;
};

export function getUserGithub(githubUser: string) {
	return api.get<User>(`users/${githubUser}`)
		.then(user => user)
		.catch(error => error)
}