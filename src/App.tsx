import styled from 'styled-components';
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	Box,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
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

const useStyles = makeStyles(() => ({
	card: {
		marginTop: "24px",
	},
	header: {
		backgroundColor: '#F3F3F3',
		position: 'fixed',
		top: 0,
		left: 0,
	}
}));

type User = {
	name: string;
	avatar: string;
	followers: number;
	following: number;
	profile: string;
};

const App: React.FC = () => {
	const classes = useStyles();
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
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt={`Foto de ${user?.name}`}
							height="250"
							image={user?.avatar}
							title={`Foto de ${user?.name}`}
						/>

						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
							>
								{user?.name}
							</Typography>
							<List>
								<ListItem>
									<ListItemText
										primary={`Following ${user?.following}`}
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										primary={`Followers ${user?.followers}`}
									/>
								</ListItem>
							</List>
						</CardContent>
						<CardActions>
							<Link href={user?.profile} target="_blank">Mais do perfil</Link>
						</CardActions>
					</CardActionArea>
				</Card>
			)}
		</Box>
	);
};

export default App;
