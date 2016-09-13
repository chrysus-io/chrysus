var nockExec = require("nock-exec");
var mock = require("mock-require");

var assert = require("chai").assert;

describe("Task dig", function() {
    var dig;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        dig = require("../../src/tasks/dig");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful dig", function (done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("dig " + target + " +noall +answer; dig -x " + target + "+noall +answer").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        dig(taskDetails, function(taskDetails, results, error) {
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

    it("should handle a failed dig", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("dig " + target + " +noall +answer; dig -x " + target + "+noall +answer").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        dig(taskDetails, function(taskDetails, results, error) {
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