var exec = require("child_process").exec;
var outputDissector = require("../dissectors/output");

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var whois = function(taskDetails) {
    logger.debug("task details: " + JSON.stringify(taskDetails));

    var target = JSON.stringify(taskDetails.target); // target must be identified in the JSON message
    exec("whois " + target, function(error, stdout, stderr) {
        if (stderr) {
            logger.error("task stderr: " + stderr);
        }

        var results = stdout;
        outputDissector(taskDetails, results);
    });
};

module.exports = whois;
