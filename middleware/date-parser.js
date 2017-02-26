const url = require('url');
const dateParser = require('dateparser');

const months = ['January', 'February', 'March', 'April',
				'May', 'June', 'July', 'August', 'September',
				'October', 'November', 'December'];

module.exports = (request, response, next) => {
	const decodedPath = decodeURIComponent(url.parse(request.url).path).slice(1);
	const dateString = Date.parse(decodedPath);
	const date = new Date(dateString);

	// The json response object
	let obj = response.locals.transformedDate = {unix: null, natural: null};

	// Short-circuit if the date is invalid or non-existent
	if (Number.isNaN(dateString)) {
		next();
	}

	// The components of the natural language string
	let month = months[date.getMonth()];
	let date = date.getDate();
	let year = date.getFullYear();

	// The natural language string
	let naturalString = `${month} ${date}, ${year}`;

	obj.unix = date.getTime();
	obj.natural = naturalString;

	next();
}