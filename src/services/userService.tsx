import { AxiosResponse } from 'axios';
import { api } from '../services/api';

export interface IUser {
	name: string;
	avatar_url: string;
	followers: number;
	following: number;
	profile: string;
	html_url: string;
	created_at: string;
};

export class UserService {

	async searchUser(githubUser: string): Promise<AxiosResponse<IUser>> {
		const response = await api.get(`users/${githubUser}`)

		return response;
	}
}