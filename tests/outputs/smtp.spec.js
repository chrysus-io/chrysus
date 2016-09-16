var nockExec = require("nock-exec");
var mock = require("mock-require");

var chai = require("chai");
var assert = chai.assert;

describe("Output smtp", function () {
    var smtp;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));

        //smtp = require("../../src/outputs/smtp");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    xit("should handle a successful output", function() {
        // Arrange
        var results = "results";
        var outputDetails = {
            sendTo: "sendTo"
        };
        var sendTo = outputDetails.sendTo;
        nockExec("echo \"" + results + "\" | mailx -s Results from Chrysus Engine" + sendTo).err("").reply(0, "");

        // Act
        smtp(outputDetails, results);

        // Assert
        
    });

    xit("should handle a failed output", function() {
        // Arrange
        var results = "results";
        var outputDetails = {
            sendTo: "sendTo"
        };
        var sendTo = JSON.stringify(outputDetails.sendTo);
        nockExec("echo \"" + results + "\" | mailx -s Results from Chrysus Engine" + sendTo).err("fail").reply(0, "");

        // Act
        smtp(outputDetails, results);

        // Assert
        
    });
});
