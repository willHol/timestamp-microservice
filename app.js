const express = require('express');
const dateParser = require('./utilities/date-parser');

const app = express();

app.get('/', function(request, response) {
	response.send('hello');
});

app.get('/:date', function(request, response) {
	// Send the object created by dateParser as JSON
	let dateObj = dateParser(request.params.date);
	response.json(dateObj);
});

app.listen(process.env.PORT || 3000);