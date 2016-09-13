var nockExec = require("nock-exec");
var mock = require("mock-require");

var chai = require("chai");
var assert = chai.assert;

describe("Task checkIn", function() {
    var checkin;
    
    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        checkIn = require("../../src/tasks/checkIn");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    it("should handle a successful check in", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedResults = "success", expectedError = "";
        nockExec("systemctl status chrysus.service | grep Active | grep -v grep | grep -v Engine").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        checkIn(taskDetails, function(taskDetails, results, error) {
            actualTaskDetails = taskDetails;
            actualResults = results;
            actualError = error;

            // Assert
            assert.equal(taskDetails, actualTaskDetails);
            assert.equal(expectedResults, actualResults);
            assert.equal(expectedError, actualError);

            done();
        });
    });

    it("should handle a failed check in", function(done) {
        // Arrange
        var taskDetails = {
            target: "target"
        };
        var target = JSON.stringify(taskDetails.target);

        var expectedError = "error", expectedResults = "";
        nockExec("systemctl status chrysus.service | grep Active | grep -v grep | grep -v Engine").err(expectedError).reply(0, expectedResults);

        // Act
        var actualTaskDetails, actualResults, actualError;
        checkIn(taskDetails, function(taskDetails, results, error) {
            actualTaskDetails = taskDetails;
            actualResults = results;
            actualError = error;

            // Assert
            assert.equal(taskDetails, actualTaskDetails);
            assert.equal(expectedResults, actualResults);
            assert.equal(expectedError, actualError);

            done();
        });
    });
});