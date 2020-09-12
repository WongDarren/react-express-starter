const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/api/users', (req, res) => {
	const users = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Darren', lastName: 'Wong' },
		{ id: 3, firstName: 'Mary', lastName: 'Swanson' },
	];

	res.json(users);
});
