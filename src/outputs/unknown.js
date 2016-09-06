// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var unknown = function(outputDetails, results) {
    logger.warning("Unknown output " + JSON.stringify(outputDetails));
};

module.exports = unknown;
