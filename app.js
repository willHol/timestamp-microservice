const express = require('express');
const path = require('path');
const dateParser = require('./utilities/date-parser');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/:date', function(request, response) {
	// Send the object created by dateParser as JSON
	let dateObj = dateParser(request.params.date);
	response.json(dateObj);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Server started.');
});