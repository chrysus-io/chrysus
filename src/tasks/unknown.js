// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

function unknown(taskDetails, callback) {
    logger.warning("task type unknown: " + JSON.stringify(taskDetails));
}

module.exports = unknown;
