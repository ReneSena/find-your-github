import React from "react";

import {
	Box,
	Typography,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

import SearchIcon from '@material-ui/icons/Search';
import { Logo } from '../../components/Logo';
import { formatDate } from '../../helpers/formatDate/formatDate';
import { StyledAvatar } from '../../components/commons/Avatar/styles';
import { StyledButton } from '../../components/commons/Button/styles';
import { StyledCard, StyledList } from '../../components/commons/Card/styles';
import { StyledInput } from '../../components/commons/Form/TextField/styles';
import { StyledBox } from "./styles";
import { getUserGithub } from "../../services/userService";
import { removeSpaceOfString } from "../../helpers/removeSpace /removeSpace";

type User = {
	name: string;
	avatar: string;
	followers: number;
	following: number;
	profile: string;
	dateCreated: string;
};

export function ProfilePage() {
	const [user, setUser] = React.useState<User | undefined>();
	const [githubUser, setGithubUser] = React.useState<string>("");

	async function handleSubmit(event: React.SyntheticEvent) {
		event.preventDefault();

		const formatNameUser = removeSpaceOfString(githubUser);


		try {
			const response = await getUserGithub(formatNameUser);

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
			<StyledBox />

			<Box
				component="form"
				title="form"
				display="flex"
				alignItems="center"
				flexDirection="column"
				marginTop="-105px"
				position="relative"
				onSubmit={handleSubmit}
			>
				<Box marginBottom="16px">
					<Logo />
				</Box>

				<Box>
					<StyledInput
						id="outlined-basic"
						label="Search a User"
						variant="outlined"
						size="small"
						value={githubUser}
						onChange={(event) => setGithubUser(event.target.value)}
					/>

					<StyledButton
						type="submit"
						variant="contained"
						color="primary"
						disabled={githubUser === ''}
					>
						<SearchIcon />
					</StyledButton>
				</Box>
			</Box>

			{user && (
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
			)}
		</Box>
	);
}