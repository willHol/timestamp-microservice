const express = require('express');
const dateParser = require('./utilities/date-parser');

const app = express();

app.get('/:date', function(request, response) {
	// Send the object created by dateParser as JSON with JSONP support
	var dateObj = dateParser(request.params.date);
	response.jsonp(dateObj);
});

app.listen(3000 || process.env.PORT);