var slack = require("../../../slack_notify.js");

module.exports = {};

var report = module.exports.report = function(message) {
	console.log("SOCKET.IO", message);
	slack.notify(message, 'UEDJRTBEZ');
}

var blankStrings = ["null", "undefined", ""];

var isBlank = module.exports.isBlank = function(obj) {
	if (Array.isArray(obj)) {
		var hasBlank = false;
		for (var item in obj) {
			if (isBlank(obj[item])) hasBlank = true;
		}
		return hasBlank;
	} else {
		return (typeof obj === "undefined") || (obj === null) || (blankStrings.indexOf(obj) >= 0);
	}
}

var toString = module.exports.toString = function(obj) {
	if (Array.isArray(obj)) {
		return JSON.stringify(obj);
	} else if (isBlank(obj)) {
		if (typeof obj === "undefined") {
			return "undefined";
		} else if (obj === null) {
			return "null";
		} else {
			return '"' + obj + '"';
		}
	} else {
		return JSON.stringify(obj);
	}
}

module.exports.reportIfBlank = function(obj, message) {
	if (isBlank(obj)) {
		report(message + ", value is: " + toString(obj));
	}
}

