var mock = require("mock-require");

var chai = require("chai");
var assert = chai.assert;

describe("Dissector output", function () {
    var output;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));

        //output = require("../../src/dissectors/output");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    afterEach(function() {
        mock.stop("../../src/outputs/nil");
        mock.stop("../../src/outputs/slackContent");
        mock.stop("../../src/outputs/slackFileDynamic");
        mock.stop("../../src/outputs/slackFileSpecified");
        mock.stop("../../src/outputs/smtp");
        mock.stop("../../src/outputs/unknown");
    });
    
    xit("should handle a null task", function() {
        // Arrange
        mock("../../src/outputs/nil", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "null" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert
        
    });

    xit("should handle a slackContent task", function() {
        // Arrange
        mock("../../src/outputs/slackContent", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "slackContent" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert

    });

    xit("should handle a slackFileDynamic task", function() {
        // Arrange
        mock("../../src/outputs/slackFileDynamic", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "slackFileDynamic" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert
        
    });

    xit("should handle a slackFileSpecified task", function() {
        // Arrange
        mock("../../src/outputs/slackFileSpecified", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "slackFileSpecified" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert
        
    });

    xit("should handle a smtp task", function() {
        // Arrange
        mock("../../src/outputs/smtp", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "smtp" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert
        
    });

    xit("should handle an unknown task", function() {
        // Arrange
        mock("../../src/outputs/unknown", require("../mocks/output.mock"));
        var results = "results";
        var taskDetails = {
            outputs: [
                { output: "unknown" }
            ]
        };

        // Act
        output(taskDetails, results);

        // Assert
        
    });
});
