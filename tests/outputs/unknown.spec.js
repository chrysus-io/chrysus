var mock = require("mock-require");

var chai = require("chai");
var assert = chai.assert;

describe("Output unknown", function () {
    var unknown;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));
        
        //unknown = require("../../src/outputs/unknown");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    xit("should handle an output", function() {
        // Arrange
        var outputDetails = {};
        var results = "results";

        // Act
        unknown(outputDetails, results);

        // Assert
        
    });
});
