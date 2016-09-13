var exec = require("child_process").exec;

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var ping = function(taskDetails, callback) {
    logger.debug("task details: " + JSON.stringify(taskDetails));

    var target = JSON.stringify(taskDetails.target); // target must be identified in the JSON message
    exec("ping -D -O -b -c 10 " + target, function(error, stdout, stderr) {
        if (stderr) {
            logger.error("task stderr: " + stderr);
        }

        callback(taskDetails, stdout, stderr, error);
    });
};

module.exports = ping;
