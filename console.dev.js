(function(window) {
	var console = (window.console = window.console || {});

	var methods = [
		"assert", "clear", "count", "debug", "dir", "dirxml",
		"error", "exception", "group", "groupCollapsed", "groupEnd",
		"info", "log", "markTimeline", "profile", "profileEnd",
		"table", "time", "timeEnd", "timeline", "timelineEnd",
		"timeStamp", "trace", "warn"
	];

	var methodsLength = methods.length;

	for (var i = 0; i < methodsLength; i++) {
		if (!console[methods[i]]) {
			console[methods[i]] = function () {};
		}
	}
})(window || this);
