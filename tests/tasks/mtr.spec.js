var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task mtr", function() {
    var mtr;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        mtr = require("../../src/tasks/mtr");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful mtr", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("mtr " + target + " --report --show-ips --aslookup --report-wide --report-cycles=100").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        mtr(taskDetails, function(taskDetails, results, error) {
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

    it("should handle a failed mtr", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("mtr " + target + " --report --show-ips --aslookup --report-wide --report-cycles=100").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        mtr(taskDetails, function(taskDetails, results, error) {
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