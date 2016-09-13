var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task sitrep", function() {
    var sitrep;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        sitrep = require("../../src/tasks/sitrep");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful sitrep", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("echo \"DATE: \"`date`; echo \"SERVER: \"` hostname`; echo \"\" ; echo \"SERVER INFO:\" ; cat `ls /etc/redhat-release /etc/centos-release /etc/ubuntu-release 2>/dev/null` ; uname -a; uptime; echo \"\" ; echo \"MEMORY AND SWAP:\"; free; echo \"\" ;echo \"DISK INFO:\" ; df -h; echo \"\" ;          echo \"INTERFACE LIST:\" ; ifconfig -a; echo \"ROUTING TABLE:\" ; netstat -rn ; echo \"\" ; echo \"PROCESSES MAPPED TO PORTS:\" ; lsof -nP | grep IPv4 | sort")
            .err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        sitrep(taskDetails, function(taskDetails, results, error) {
            actualTaskDetails = taskDetails;
            actualResults = results;
            actualError = error;

            // Assert
            assert.equal(actualTaskDetails, taskDetails);
            assert.equal(actualResults, expectedResults);
            assert.equal(actualError, expectedError);

            done();
        });
    });

    it("should handle a failed sitrep", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("echo \"DATE: \"`date`; echo \"SERVER: \"` hostname`; echo \"\" ; echo \"SERVER INFO:\" ; cat `ls /etc/redhat-release /etc/centos-release /etc/ubuntu-release 2>/dev/null` ; uname -a; uptime; echo \"\" ; echo \"MEMORY AND SWAP:\"; free; echo \"\" ;echo \"DISK INFO:\" ; df -h; echo \"\" ;          echo \"INTERFACE LIST:\" ; ifconfig -a; echo \"ROUTING TABLE:\" ; netstat -rn ; echo \"\" ; echo \"PROCESSES MAPPED TO PORTS:\" ; lsof -nP | grep IPv4 | sort")
            .err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        sitrep(taskDetails, function(taskDetails, results, error) {
            actualTaskDetails = taskDetails;
            actualResults = results;
            actualError = error;

            // Assert
            assert.equal(actualTaskDetails, taskDetails);
            assert.equal(actualResults, expectedResults);
            assert.equal(actualError, expectedError);

            done();
        });
    });
});