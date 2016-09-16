var Severity = require("./severity");

var sev = Severity.debug;

var logger = {
    setSeverity: function(severity) {
        if(severity < 0 || severity > 7) {
            throw new Error("Severity must follow syslog standards! (i.e., 0-7)");
        }

        sev = severity;
    },
    getSeverity: function() {
        return sev;
    },
    debug: function(message) {
        logger.log(Severity.debug, "DEBUG: " + message);
    },
    info: function(message) {
        logger.log(Severity.info, "INFO: " + message);
    },
    notice: function(message) {
        logger.log(Severity.notice, "NOTICE: " + message);
    },
    warning: function(message) {
        logger.log(Severity.warning, "WARNING: " + message);
    },
    error: function(message) {
        logger.log(Severity.error, "ERROR: " + message);
    },
    critical: function(message) {
        logger.log(Severity.critical, "CRITICAL: " + message);
    },
    alert: function(message) {
        logger.log(Severity.alert, "ALERT: " + message);
    },
    emergency: function(message) {
        logger.log(Severity.emergency, message);
    },
    log: function(severity, message) {
        if(!message || 0 === message.length) {
            return;
        }

        if(severity <= sev) {
            if(severity <= Severity.error) { // Error, Critical, Alert, Emergency
                console.error(message);
            }
            else if(severity <= Severity.notice) { // Notice, Warning
                console.warn(message)
            }
            else { // Debug, Info
                console.log(message);
            }
        }
    }
};

module.exports = logger;
