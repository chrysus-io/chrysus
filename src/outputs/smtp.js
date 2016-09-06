var exec = require("child_process").exec;

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var smtp = function(outputDetails, results) {
    var sendTo = JSON.stringify(outputDetails.sendTo); // sendTo must be identified in the JSON message

    logger.info("Sending results via SMTP to: " + sendTo + results);
    logger.debug("process output details: " + JSON.stringify(outputDetails));

    exec("echo \"" + results + "\" | mailx -s Results from Chrysus Engine" + sendTo, function(error, stdout, stderr) {
        if(stderr) {
            logger.error("task stderr: " + stderr);
        }
    });
};

module.exports = smtp;
