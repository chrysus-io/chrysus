var mock = require("mock-require");
var chai = require("chai");
var assert = chai.assert;

var shouldReturnError = require("../mocks/node-slack-upload.mock").returnError;

describe("Output slackFileDynamic", function () {
    var slackFileDynamic;

    before(function() {
        mock("fs", require("../mocks/fs.mock"));
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        mock("node-slack-upload", require("../mocks/node-slack-upload.mock"));

        //slackFileDynamic = require("../../src/outputs/slackFileDynamic");
    });

    after(function() {
        mock.stop("fs");
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
        slackFileDynamic(outputDetails, results);

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
        slackFileDynamic(outputDetails, results);

        // Assert
        
    });
});
