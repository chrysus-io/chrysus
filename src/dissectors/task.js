// Task Dissector
/////////////////

var outputDissector = require("./output");

var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var taskCallback = function(taskDetails, results, stderr, error) {
    if(error) {
        logger.error("Child Process Exec returned error: " + error);
        return;
    }

    outputDissector(taskDetails, results);
};

var dissector = function(task, taskDetails) {
    logger.debug("task dissector type: " + task);
    logger.debug("task dissector taskDetails: " + JSON.stringify(taskDetails));

    switch (task)
    {
        case 'check-in':
            var checkIn = require("../tasks/checkIn");
            checkIn(taskDetails, taskCallback);
        break;

        case 'dig':
            var dig = require("../tasks/dig");
            dig(taskDetails, taskCallback);
        break;

        case 'mtr':
            var mtr = require("../tasks/mtr");
            mtr(taskDetails, taskCallback);
        break;

        case 'nmap':
            var nmap = require("../tasks/nmap");
            nmap(taskDetails, taskCallback);
        break;

        case 'nslookup':
            var nslookup = require("../tasks/nslookup");
            nslookup(taskDetails, taskCallback);
        break;

        case 'ping':
            var ping = require("../tasks/ping");
            ping(taskDetails, taskCallback);
        break;

        case 'sitrep':
            var sitrep = require("../tasks/sitrep");
            sitrep(taskDetails, taskCallback);
        break;

        case 'traceroute':
            var traceroute = require("../tasks/traceroute");
            traceroute(taskDetails, taskCallback);
        break;

        case 'whois':
            var whois = require("../tasks/whois");
            whois(taskDetails, taskCallback);
        break;

        default: 
            logger.warning("unknown task type: " + task);
            var unknown = require("../tasks/unknown");
            unknown(taskDetails, taskCallback);
    }
};

module.exports = dissector;
