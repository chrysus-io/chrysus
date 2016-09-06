// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var nil = function(outputDetails, results) {
    logger.info("Sending results to null " + results);
    logger.debug("Process output details: " + (JSON.stringify(outputDetails)));
};

module.exports = nil;
