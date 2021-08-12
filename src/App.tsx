import styled from 'styled-components';
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	Avatar,
	Box,
	CardActionArea,
	CardContent,
	Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from '@material-ui/icons/Search';
import { Logo } from './components/Logo';

const StyledInput = styled(TextField)`
	background: #fff;
	width: 400px;

	& .MuiOutlinedInput-root {
		border-radius: 4px 0 0 4px;
	}
`;

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

const StyledButton = styled(Button)`
	border-radius: 0 4px 4px 0;
	height: 40px;
	opacity: 1;

	&[disabled] {
		background-color: #e4e4e4;
	}
`;

const StyledCard = styled(Card)`
	margin-top: 60px;
	width: 500px;
	height: 450px;

	& .MuiCardContent-root {
		padding: 0;
	}
`;

const StyledAvatar = styled(Avatar)`
	width: 150px;
	height: 150px;
	margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
	color: #7B42D9;
	border: 1px solid #7B42D9;
	height: 40px;
	border-radius: 50px;
	padding: 0 20px;
	line-height: 40px;
	transition: all 200ms linear;
	width: 10pc;

	&:hover {
		text-decoration: none;
		background: #7B42D9;
		color: white;
		box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.1);
	}
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
				const dateFormat = new Date(data.created_at).toLocaleString("pt-br", {
					day: "numeric",
					month: "2-digit",
					year: "2-digit"
				});

				setUser({
					name: data.name,
					avatar: data.avatar_url,
					followers: data.followers,
					following: data.following,
					profile: data.html_url,
					dateCreated: dateFormat
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
							<div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', height: '450px', textAlign: 'center'}}>
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
									<StyledLink href={user?.profile} target="_blank">More details</StyledLink>
								</CardActions>
							</div>
							<List style={{ padding: '0'}}>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '150px', background: '#D7D8FF', borderRadius: `5px`, borderBottom: `1px solid white`}}>
									<ListItemText
										primary={`${user?.following}`} secondary="Following"
									/>
								</ListItem>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '150px', background: '#D7D8FF', borderRadius: `0`, borderBottom: `1px solid white`}}>
									<ListItemText
										primary={`${user?.followers}`} secondary="Followers"
									/>
								</ListItem>
								<ListItem style={{ textAlign: 'center', width: '200px', height: '150px', background: '#D7D8FF', borderRadius: `5px`}}>
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
