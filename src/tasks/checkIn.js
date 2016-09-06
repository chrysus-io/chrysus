var exec = require("child_process").exec;
var outputDissector = require("../dissectors/output");

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var checkIn = function(taskDetails) {
    exec("systemctl status chrysus.service | grep Active | grep -v grep | grep -v Engine", function(error, stdout, stderr) {
        if(stderr) {
            logger.error("task stderr: " + stderr);
        }

        var results = stdout;
        outputDissector(taskDetails, results);
    });
};

module.exports = checkIn;
