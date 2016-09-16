var mock = require("mock-require");
var chai = require("chai");
var assert = chai.assert;

describe("Output nil", function () {
    var nil;

    before(function() {
        mock("../../src/logger/logger", require("../mocks/logger.mock"));

        //nil = require("../../src/outputs/nil");
    });

    after(function() {
        mock.stop("../../src/logger/logger");
    });

    xit("should handle an unknown output", function() {
        // Arrange
        var outputDetails = { outputDetails: "outputDetails" };
        var results = "results";

        // Act
        nil(outputDetails, results);

        // Assert
        
    });
});
