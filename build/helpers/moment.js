'use strict';

var moment = require('moment');

module.exports = function (context, options) {
	var date = options ? context : new Date();
	var options = options || context;
	var format = options.hash.format || 'YYYY-MM-DD ';
	// http://momentjs.com/docs/#/displaying/
	return moment(date).utc().format(format);
}
