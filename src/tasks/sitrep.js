var exec = require("child_process").exec;
var outputDissector = require("../dissectors/output");

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var sitrep = function(taskDetails) {
    logger.debug("task details: " + JSON.stringify(taskDetails));

    exec("echo \"DATE: \"`date`; echo \"SERVER: \"` hostname`; echo \"\" ; echo \"SERVER INFO:\" ; cat `ls /etc/redhat-release /etc/centos-release /etc/ubuntu-release 2>/dev/null` ; uname -a; uptime; echo \"\" ; echo \"MEMORY AND SWAP:\"; free; echo \"\" ;echo \"DISK INFO:\" ; df -h; echo \"\" ;          echo \"INTERFACE LIST:\" ; ifconfig -a; echo \"ROUTING TABLE:\" ; netstat -rn ; echo \"\" ; echo \"PROCESSES MAPPED TO PORTS:\" ; lsof -nP | grep IPv4 | sort", 
        function(error, stdout, stderr) {
            if (stderr) {
                logger.error("task stderr: " + stderr);
            }

            var results = stdout;
            outputDissector(taskDetails, results);
        });
};

module.exports = sitrep;
