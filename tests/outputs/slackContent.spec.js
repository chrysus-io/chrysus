var mock = require("mock-require");
var chai = require("chai");
var assert = chai.assert;

var shouldReturnError = require("../mocks/node-slack-upload.mock").returnError;

describe("Output slackContent", function () {
    var slackContent;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        mock("node-slack-upload", require("../mocks/node-slack-upload.mock"));

        //slackContent = require("../../src/outputs/slackContent");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
        mock.stop("node-slack-upload");
    });

    xit("should successfully output", function() {
        // Arrange
        var results = "results";
        var outputDetails = {
            botKey: "botKey",
            reqRawText: "reqRawText",
            reqName: "reqName",
            reqRoom: "reqRoom"
        };

        // Act
        slackContent(outputDetails, results);

        // Assert
        
    });

    xit("should handle a failed output", function() {
        // Arrange
        shouldReturnError(true);
        var results = "results";
        var outputDetails = {
            botKey: "botKey",
            reqRawText: "reqRawText",
            reqName: "reqName",
            reqRoom: "reqRoom"
        };

        // Act
        slackContent(outputDetails, results);

        // Assert
        
    });
});
