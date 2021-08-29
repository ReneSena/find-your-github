import styled from 'styled-components';
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
	Box,
	CardActionArea,
	CardContent,
	Typography,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from '@material-ui/icons/Search';
import { Logo } from './components/Logo';
import { formatDate } from './helpers/formatDate/formatDate';
import { StyledAvatar } from './components/commons/Avatar/styles';
import { StyledButton } from './components/commons/Button/styles';
import { StyledCard } from './components/commons/Card/styles';
import { StyledInput } from './components/commons/Form/TextField/styles';


const StyledBox = styled(Box)`
	background-color: #f3f3f3;
	width: 100%;
	height: 200px;
	display: block;
	position: relative;
	top: 0;
	left: 0;
	border-bottom: 1px solid #b4b4b4;
	z-index: 0;
`;

type User = {
	name: string;
	avatar: string;
	followers: number;
	following: number;
	profile: string;
	dateCreated: string;
};

const App: React.FC = () => {
	const [user, setUser] = React.useState<User>();
	const [githubUser, setGithubUser] = React.useState<string>("");

	function handleSubmit(event: React.SyntheticEvent) {
		event.preventDefault();

		fetch(`https://api.github.com/users/${githubUser}`)
			.then((response) => response.json())
			.then((data) => {

				setUser({
					name: data.name,
					avatar: data.avatar_url,
					followers: data.followers,
					following: data.following,
					profile: data.html_url,
					dateCreated: formatDate(data.created_at)
				})
			}
			).catch(error => console.log(error))
		}

	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection="column"
			justifyContent="flex-start"
			width="100%"
		>
			<CssBaseline />

			<StyledBox />

			<form
				title="form"
				onSubmit={handleSubmit}
				noValidate
				autoComplete="off"
				style={{ display: "flex", alignItems:"center", flexDirection: "column", marginTop: '-105px', position: "relative" }}
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
			</form>

			{user && (
				<StyledCard>
					<CardActionArea>
						<CardContent style={{ display: 'flex', alignItems: 'center'}}>
							<div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', height: '300px', textAlign: 'center'}}>
								<div>
									<StyledAvatar alt={`Foto de perfil de ${user.name}`} src={user?.avatar} />
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										{user?.name}
									</Typography>
								</div>
								<CardActions>
									<StyledButton size="small" variant="outlined" href={user?.profile}>More details</StyledButton>
								</CardActions>
							</div>
							<List style={{ padding: '0'}}>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '100px', background: '#D7D8FF', borderRadius: `5px`, borderBottom: `1px solid white`}}>
									<ListItemText
										primary={`${user?.following}`} secondary="Following"
									/>
								</ListItem>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '100px', background: '#D7D8FF', borderRadius: `0`, borderBottom: `1px solid white`}}>
									<ListItemText
										primary={`${user?.followers}`} secondary="Followers"
									/>
								</ListItem>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '100px', background: '#D7D8FF', borderRadius: `5px`}}>
									<ListItemText
										primary={`${user?.dateCreated}`} secondary="Created"
									/>
								</ListItem>
							</List>
						</CardContent>
					</CardActionArea>
				</StyledCard>
			)}
		</Box>
	);
};

export default App;
