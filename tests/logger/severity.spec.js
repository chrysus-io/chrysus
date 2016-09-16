var assert = require("chai").assert;

describe("Logger severity", function() {
    var severity;

    before(function() {
        severity = require("../../src/logger/severity");
    });

    describe("emergency", function() {
        it("should return 0", function() {
            // Arrange
            var expected = 0;
            var expectedType = "number";

            // Act
            var actual = severity.emergency;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("alert", function() {
        it("should return 1", function() {
            // Arrange
            var expected = 1;
            var expectedType = "number";

            // Act
            var actual = severity.alert;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("critical", function() {
        it("should return 2", function() {
            // Arrange
            var expected = 2;
            var expectedType = "number";

            // Act
            var actual = severity.critical;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("error", function() {
        it("should return 3", function() {
            // Arrange
            var expected = 3;
            var expectedType = "number";

            // Act
            var actual = severity.error;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("warning", function() {
        it("should return 4", function() {
            // Arrange
            var expected = 4;
            var expectedType = "number";

            // Act
            var actual = severity.warning;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("notice", function() {
        it("should return 5", function() {
            // Arrange
            var expected = 5;
            var expectedType = "number";

            // Act
            var actual = severity.notice;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("info", function() {
        it("should return 6", function() {
            // Arrange
            var expected = 6;
            var expectedType = "number";

            // Act
            var actual = severity.info;

            // Assert
            assert.typeOf(actual, expectedType);
            assert.equal(expected, actual);
        });
    });

    describe("debug", function() {
        it("should return 7", function() {
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
});