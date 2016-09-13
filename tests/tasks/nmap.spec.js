var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task nmap", function() {
    var nmap;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        nmap = require("../../src/tasks/nmap");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful nmap", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("nmap -sV -A " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        nmap(taskDetails, function(taskDetails, results, error) {
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

    it("should handle a failed nmap", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("nmap -sV -A " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        nmap(taskDetails, function(taskDetails, results, error) {
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