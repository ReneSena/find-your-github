import React from "react";

import { formatDate } from '../../helpers/formatDate/formatDate';
import { getUserGithub, IUser } from "../../services/userService";
// import { removeSpaceOfString } from "../../helpers/removeSpace /removeSpace";
import { useLocation } from "react-router-dom";
import { Avatar, Button, Container, ContentInfo, Header } from "./styles";

function getUserName(params: string) {
	const urlSearch = new URLSearchParams(params);
	const userName = urlSearch.get('name');

	if (userName !== null) {
		return userName;
	}

	return '';
}

export function ProfilePage() {
	const location = useLocation();

	const[user, setUser] = React.useState<IUser>({
		name: '',
		avatar: '',
		followers: 0,
		following: 0,
		profile: '',
		dateCreated: ''
	});

	React.useEffect(() => {
		async function getUserDetails() {
			try {
				const response = await getUserGithub(getUserName(location.search));

				const {
					name, avatar_url, followers,
					following, html_url, created_at } = response?.data;

				setUser({
					name: name,
					avatar: avatar_url,
					followers: followers,
					following: following,
					profile: html_url,
					dateCreated: formatDate(created_at)
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
				<Avatar alt={`Foto de perfil de ${user.name}`} src={user?.avatar} loading="lazy" />
				<h4>{user.name}</h4>
			</Header>
			<ContentInfo>
				<li>
					<p>Followers</p>
					<strong>{user?.followers}</strong>
				</li>
				<li>
					<p>Following</p>
					<strong>{user?.following}</strong>
				</li>
				<li>
					<p>Created at</p>
					<strong>{user?.dateCreated}</strong>
				</li>
			</ContentInfo>
			<Button href={user?.profile}>More details</Button>
		</Container>
	);
}