var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task traceroute", function() {
    var traceroute;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        traceroute = require("../../src/tasks/traceroute");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful traceroute", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("traceroute -N 30 " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        traceroute(taskDetails, function(taskDetails, results, error) {
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

    it("should handle a failed traceroute", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("traceroute -N 30 " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        traceroute(taskDetails, function(taskDetails, results, error) {
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