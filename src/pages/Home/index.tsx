import React from "react";

import {
	Box,
	Typography,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

import { formatDate } from '../../helpers/formatDate/formatDate';
import { StyledAvatar } from '../../components/commons/Avatar/styles';
import { StyledButton } from '../../components/commons/Button/styles';
import { StyledCard, StyledList } from '../../components/commons/Card/styles';
import { getUserGithub } from "../../services/userService";
import { removeSpaceOfString } from "../../helpers/removeSpace /removeSpace";
import { useLocation } from "react-router-dom";

type User = {
	name: string;
	avatar: string;
	followers: number;
	following: number;
	profile: string;
	dateCreated: string;
};

export function ProfilePage() {
	const [user, setUser] = React.useState<User>({
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
				const response = await getUserGithub('ReneSena');

				const {
					name, avatar_url, followers,
					following, html_url, created_at } = response.data;

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

		console.log(user)

	}, []);

	function ListInfoItemUser(props: { title: number | string, description: string }): JSX.Element {
		return (
			<li>
				<h2>{props.title}</h2>
				<h3>{props.description}</h3>
			</li>
		);
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection="column"
			justifyContent="flex-start"
			width="100%"
		>
			<StyledCard>
				<Box display="flex" alignItems="center">
					<Box
						width="100%"
						height="300px"
						display="flex"
						alignItems="center"
						flexDirection="column"
						justifyContent="space-evenly"
						textAlign="center">
						<Box>
							<StyledAvatar alt={`Foto de perfil de ${user.name}`} src={user?.avatar} />
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
							>
								{user?.name}
							</Typography>
						</Box>
						<CardActions>
							<StyledButton size="small" variant="outlined" href={user?.profile}>More details</StyledButton>
						</CardActions>
					</Box>
					<StyledList>
						<ListInfoItemUser title={user?.followers} description="Followers" />
						<ListInfoItemUser title={user?.following} description="Following" />
						<ListInfoItemUser title={user?.dateCreated} description="Created at" />
					</StyledList>
				</Box>
			</StyledCard>
		</Box>
	);
}