const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/api/users', (req, res) => {
	const users = [
		{ id: '1', firstName: 'darren', lastName: 'wong' },
		{ id: '2', firstName: 'john', lastName: 'doe' },
		{ id: '3', firstName: 'smith', lastName: 'apple' },
	];

	res.json(users);
});
