var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am --> 0

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1498695904;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ H:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
