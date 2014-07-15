var winston = require('winston');
require('winston-loggly');
require('winston-papertrail').Papertrail;

winston.add(winston.transports.Loggly, {});

exports = module.exports = function(options) {
	var logger;
	if (typeof options.details == 'undefined') {
		options.details = {}
	}
	if (typeof options.details.handleExceptions == 'undefined') {
		options.details.handleExceptions = true;
	}

	if (options.type == 'simple') {
		logger = new (winston.Logger)({
			transports: [
				new (winston.transports.Console)(options.details)
			]
		});
	} else if (options.type == 'file') {
		logger = new (winston.Logger)({
			transports: [
				new (winston.transports.File)(options.details)
			]
		});
	} else if (options.type == 'loggly') {
		logger = new (winston.Logger)({
			transports: [
				new (winston.transports.Loggly)(options.details)
			]
		});
	} else if (options.type == 'papertrail') {
        logger = new (winston.Logger)({
            transports: [
                new winston.transports.Papertrail(options.details)
            ]
        });
	}

//	//@todo Decide whetehr exiting can cause problems with remote logging services?
//	logger.on('logging', function (transport, level, msg, meta) {
//		if (level='error') process.exit(1)
//	});
	return logger;
}