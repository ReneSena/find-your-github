import React from "react";

import { formatDate } from '../../helpers/formatDate/formatDate';
import { IUser, UserService } from "../../services/userService";
import { useLocation } from "react-router-dom";
import { Avatar, Container, ContentInfo, Header, WrapperInfo } from "./styles";

function getUserName(params: string) {
	const urlSearch = new URLSearchParams(params);
	const userName = urlSearch.get('name');

	if (userName !== null) {
		return userName;
	}

	return '';
}

const ProfilePage = () => {
	const location = useLocation();

	const[user, setUser] = React.useState<IUser>({
		name: '',
		avatar_url: '',
		followers: 0,
		following: 0,
		profile: '',
		html_url: '',
		created_at: '',
		bio: '',
		public_repos: 0
	});

	React.useEffect(() => {
		async function getUserDetails() {
			const userService = new UserService();

			try {
				const response = await userService.searchUser(getUserName(location.search));


				const {
					name, avatar_url, followers,
					following, html_url, created_at, bio, public_repos } = response.data;

				setUser({
					name,
					avatar_url,
					followers,
					following,
					profile: html_url,
					html_url,
					created_at: formatDate(created_at),
					bio,
					public_repos
				});
			}
			catch (error) {
				console.error(error)
			}
		}

		getUserDetails();
	}, [location.search]);

	return (
		<Container>
			<Header>
				<Avatar alt={`Foto de perfil de ${user.name}`} src={user?.avatar_url} loading="lazy" />
				<WrapperInfo>
					<h4>{user.name}</h4>
					<ContentInfo>
						<li>
							<p><strong>{user?.public_repos}</strong> repositories</p>
						</li>
						<li>
							<p><strong>{user?.followers}</strong> followers</p>
						</li>
						<li>
							<p><strong>{user?.following}</strong> following</p>
						</li>
					</ContentInfo>
					<p><i>{user?.bio}</i></p>
				</WrapperInfo>
			</Header>
		</Container>
	);
}

export default ProfilePage;