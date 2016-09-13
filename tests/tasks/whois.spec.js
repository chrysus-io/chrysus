var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task whois", function() {
    var whois;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        whois = require("../../src/tasks/whois");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful whois", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("whois " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        whois(taskDetails, function(taskDetails, results, error) {
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

    it("should handle a failed whois", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("whois " + target).err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        whois(taskDetails, function(taskDetails, results, error) {
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