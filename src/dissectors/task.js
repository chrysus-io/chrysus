// Task Dissector
/////////////////

var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var dissector = function(task, taskDetails) {
    logger.debug("task dissector type: " + task);
    logger.debug("task dissector taskDetails: " + JSON.stringify(taskDetails));

    switch (task)
    {
        case 'check-in':
            var checkIn = require("../tasks/checkIn");
            checkIn(taskDetails);
        break;

        case 'dig':
            var dig = require("../tasks/dig");
            dig(taskDetails);
        break;

        case 'mtr':
            var mtr = require("../tasks/mtr");
            mtr(taskDetails);
        break;

        case 'nmap':
            var nmap = require("../tasks/nmap");
            nmap(taskDetails);
        break;

        case 'nslookup':
            var nslookup = require("../tasks/nslookup");
            nslookup(taskDetails);
        break;

        case 'ping':
            var ping = require("../tasks/ping");
            ping(taskDetails);
        break;

        case 'sitrep':
            var sitrep = require("../tasks/sitrep");
            sitrep(taskDetails);
        break;

        case 'traceroute':
            var traceroute = require("../tasks/traceroute");
            traceroute(taskDetails);
        break;

        case 'whois':
            var whois = require("../tasks/whois");
            whois(taskDetails);
        break;

        default: 
            logger.warning("unknown task type: " + task);
            var unknown = require("../tasks/unknown");
            unknown(taskDetails);
    }
};

module.exports = dissector;
