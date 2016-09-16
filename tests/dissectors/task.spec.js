var nockExec = require("nock-exec");
var mock = require("mock-require");

var chai = require("chai");
var assert = chai.assert;

describe("Dissector task", function () {
    var task;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));

        //task = require("../../src/dissectors/task");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    xit("should log an error when the task fails", function() {
        // Arrange
        var theTask = "check-in";
        var taskDetails = {
            target: "target"
        };

        var expectedResults = "", expectedError = "error";

        // Act

        // Assert

    });

    xit("should perform task checkIn", function() {
        // Arrange
        var theTask = "check-in";
        var taskDetails = {
            target: "target"
        };

        var expectedResults = "success", expectedError = "";
        nockExec("systemctl status chrysus.service | grep Active | grep -v grep | grep -v Engine").err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task dig", function() {
        // Arrange
        var theTask = "dig";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("dig " + target + " +noall +answer; dig -x " + target + "+noall +answer").err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task mtr", function() {
        // Arrange
        var theTask = "mtr";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("mtr " + target + " --report --show-ips --aslookup --report-wide --report-cycles=100").err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task nmap", function() {
        // Arrange
        var theTask = "nmap";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("nmap -sV -A " + target).err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task nslookup", function() {
        // Arrange
        var theTask = "nslookup";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("nslookup -query=any " + target).err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task ping", function() {
        // Arrange
        var theTask = "ping";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("ping -D -O -b -c 10 " + target).err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task sitrep", function() {
        // Arrange
        var theTask = "sitrep";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("echo \"DATE: \"`date`; echo \"SERVER: \"` hostname`; echo \"\" ; echo \"SERVER INFO:\" ; cat `ls /etc/redhat-release /etc/centos-release /etc/ubuntu-release 2>/dev/null` ; uname -a; uptime; echo \"\" ; echo \"MEMORY AND SWAP:\"; free; echo \"\" ;echo \"DISK INFO:\" ; df -h; echo \"\" ;          echo \"INTERFACE LIST:\" ; ifconfig -a; echo \"ROUTING TABLE:\" ; netstat -rn ; echo \"\" ; echo \"PROCESSES MAPPED TO PORTS:\" ; lsof -nP | grep IPv4 | sort")
            .err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task traceroute", function() {
        // Arrange
        var theTask = "traceroute";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("traceroute -N 30 " + target).err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task whois", function() {
        // Arrange
        var theTask = "whois";
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("whois " + target).err(expectedError).reply(0, expectedResults);

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });

    xit("should perform the task unknown", function() {
        // Arrange
        var theTask = "unknown";
        var taskDetails = {
            target: "target"
        };

        // Act
        task(theTask, taskDetails);

        // Assert
        
    });
});
