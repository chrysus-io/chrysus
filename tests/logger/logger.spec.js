var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Logger logger", function () {
    var Severity;
    var logger;

    before(function() {
        Severity = require("../../src/logger/severity");

        //logger = require("../../src/logger/logger");
    });
    
    describe("setSeverity", function() {
        xit("should not throw an error", function() {
            
        });

        xit("should throw an error", function() {
            
        });
    });

    describe("emergency", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("alert", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("critical", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("error", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("warning", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("notice", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("info", function() {
        xit("should log the correct severity and message", function() {

        });
    });

    describe("debug", function() {
        xit("should log the correct severity and message", function() {

        });
    });
});
