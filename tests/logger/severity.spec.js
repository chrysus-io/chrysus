var assert = require("chai").assert;

describe("Logger severity", function() {
    var severity;

    before(function() {
        severity = require("../../src/logger/severity");
    });
    
    it("should return 0 for emergency", function() {
        // Arrange
        var expected = 0;
        var expectedType = "number";

        // Act
        var actual = severity.emergency;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 1 for alert", function() {
        // Arrange
        var expected = 1;
        var expectedType = "number";

        // Act
        var actual = severity.alert;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 2 for critical", function() {
        // Arrange
        var expected = 2;
        var expectedType = "number";

        // Act
        var actual = severity.critical;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 3 for error", function() {
        // Arrange
        var expected = 3;
        var expectedType = "number";

        // Act
        var actual = severity.error;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 4 for warning", function() {
        // Arrange
        var expected = 4;
        var expectedType = "number";

        // Act
        var actual = severity.warning;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 5 for notice", function() {
        // Arrange
        var expected = 5;
        var expectedType = "number";

        // Act
        var actual = severity.notice;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 6 for info", function() {
        // Arrange
        var expected = 6;
        var expectedType = "number";

        // Act
        var actual = severity.info;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });

    it("should return 7 for debug", function() {
        // Arrange
        var expected = 7;
        var expectedType = "number";

        // Act
        var actual = severity.debug;

        // Assert
        assert.typeOf(actual, expectedType);
        assert.equal(expected, actual);
    });
});