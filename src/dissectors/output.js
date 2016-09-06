// Output Dissector
///////////////////

var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var dissector = function(taskDetails, results) {
    logger.debug("Number of outputs in the array for this specific task was: " + taskDetails.outputs.length);

    // Loop through this specific task and get the list of outputs for this task
    for (var i = 0; i < taskDetails.outputs.length; i++) {
        var output = taskDetails.outputs[i].output; // Determine the specific output type
        logger.debug("Output type is: " + output);
        logger.debug("Output details " + JSON.stringify(taskDetails.outputs[i]));

        var outputDetails = taskDetails.outputs[i]; // Populates from the current JSON data

        // Use "case" statements to determine the requested "outputs" to send the results of this particular task
        switch (output)
        {
            case 'null': 
                logger.notice("Output type: " + output + results);
                var nil = require("../outputs/nil");
                nil(outputDetails, results);
            break;

            case 'slackContent':
                var slackContent = require("../outputs/slackContent");
                slackContent(outputDetails, results);
            break;

            case 'slackFileDynamic':
                var slackFileDynamic = require("../outputs/slackFileDynamic");
                slackFileDynamic(outputDetails, results);
            break;

            case 'slackFileSpecified':
                var slackFileSpecified = require("../outputs/slackFileSpecified");
                slackFileSpecified(outputDetails, results);
            break;

            case 'smtp':
                var smtp = require("../outputs/smtp");
                smtp(outputDetails, results);
            break;

            default:
                logger.warning("unknown output type: " + outputDetails);
                var unknown = require("../outputs/unknown");
                unknown(outputDetails, results);
        }
    }
};

module.exports = dissector;
