const express = require('express');
const dateParser = require('date-parser');

const app = express();

app.use('/', dateParser);

app.get('/', function(request, response) {
	// Send the object created by dateParser as JSON with JSONP support
	response.jsonp(response.locals.transformedDate);
});

app.listen(3000 || process.env.PORT);