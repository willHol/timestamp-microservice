const url = require('url');
const dateParser = require('dateparser');

const months = ['January', 'February', 'March', 'April',
				'May', 'June', 'July', 'August', 'September',
				'October', 'November', 'December'];

module.exports = (query) => {
	const decodedQuery = decodeURIComponent(query);
	let date;

	// Create the date object
	if (/\D/.test(decodedQuery)) {
		// Natural Language
		date = new Date(decodedQuery);
	} else {
		// UNIX Epoch
		date = new Date(Number(decodedQuery) * 1000);
	}

	// The json response object
	let obj = {unix: null, natural: null};

	// Short-circuit if the date is invalid or non-existent
	if (date == 'Invalid Date') {
		return obj;
	}

	// The components of the natural language string
	let month = months[date.getMonth()];
	let day = date.getDate();
	let year = date.getFullYear();

	console.log(month, day, year);
	// The natural language string
	let naturalString = `${month} ${day}, ${year}`;

	obj.unix = date.getTime() / 1000;
	obj.natural = naturalString;

	return obj;
}