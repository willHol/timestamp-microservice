const url = require('url');

const months = ['January', 'February', 'March', 'April',
				'May', 'June', 'July', 'August', 'September',
				'October', 'November', 'December'];

module.exports = (query) => {
	const decodedQuery = decodeURIComponent(query);
	let date;

	// The json response object
	let obj = {unix: null, natural: null};

	// Create the date object
	if (/\D | ^[^-\D]/.test(decodedQuery)) {
		// Natural Language
		date = new Date(decodedQuery);
		obj.unix = Math.round(date.getTime() / 1000) - date.getTimezoneOffset() * 60;
	} else {
		// UNIX Epoch
		date = new Date(Number(decodedQuery) * 1000);
		obj.unix = Math.round(date.getTime() / 1000);
	}

	// Short-circuit if the date is invalid or non-existent
	if (date == 'Invalid Date') {
		return {unix: null, natural: null};
	}

	// The components of the natural language string
	let month = months[date.getMonth()];
	let day = date.getDate();
	let year = date.getFullYear();

	// The natural language string
	let naturalString = `${month} ${day}, ${year}`;
	obj.natural = naturalString;

	return obj;
}