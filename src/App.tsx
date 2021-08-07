import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
	return (
	<form noValidate autoComplete="off">
		<TextField id="outlined-basic" label="Your User" variant="outlined" />
		<Button type="submit" variant="contained" color="primary">
			Buscar
		</Button>
	</form>
	);
}

export default App;
