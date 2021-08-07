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

const useStyles = makeStyles(() => ({
	button: {
		borderRadius: "0 4px 4px 0",
	},
	input: {
		borderRadius: "4px 0 0 4px",
	},
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
			.then((data) =>
				setUser({
					name: data.name,
					avatar: data.avatar_url,
					followers: data.followers,
					following: data.following,
					profile: data.html_url,
				})
			).catch(error => console.log(error))
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection="column"
			justifyContent="center"
			width="100%"
			height="100vh"
		>
			<CssBaseline />

			<form
				onSubmit={handleSubmit}
				noValidate
				autoComplete="off"
				style={{ display: "flex" }}
			>
				<TextField
					className={classes.input}
					id="outlined-basic"
					label="Your User"
					variant="outlined"
					size="small"
					value={githubUser}
					onChange={(event) => setGithubUser(event.target.value)}
				/>
				<Button
					className={classes.button}
					type="submit"
					variant="contained"
					color="primary"
					disabled={githubUser === ''}
				>
					Buscar
				</Button>
			</form>

			{user && (
				<Card>
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
							<Link href={user?.profile}>Mais do perfil</Link>
						</CardActions>
					</CardActionArea>
				</Card>
			)}
		</Box>
	);
};

export default App;
