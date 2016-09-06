var Slack = require("node-slack-upload");
var fs = require('fs');

// Logging
var Severity = require("../logger/severity");
var logger = require("../logger/logger");
logger.setSeverity(Severity.info);

var slackFileSpecified = function(outputDetails, results) {
    logger.info("Sending results to Slack: " + results);
    logger.debug("process output details: " + (JSON.stringify(outputDetails)));

    // Display the output in Slack with an expandable/collapsible snippet text area
    // Uses: https://www.npmjs.com/package/node-slack-upload
    // REF: https://api.slack.com/methods/files.upload
    var token = outputDetails.botKey; // Identifies which specific bot will be posting the message in Slack
    var fileSpecified = outputDetails.fileSpecified; // Identifies the file to upload to Slack (specified in JSON message)
    var slack = new Slack(token);
    slack.uploadFile({
        file: fs.createReadStream(results),
        filetype: 'auto', // Possible file types are: https://api.slack.com/types/file#file_types
        title: "Results of: " + outputDetails.reqRawText + " requested by @" + outputDetails.reqName,
        initialComment: "The request was: " + outputDetails.reqRawText, // Comment line is optional in Slack
        channels: outputDetails.reqRoom // Send the results to a Slack channel or private message
    }, function(err) {
        if (err) {
            logger.error("files.upload err: " + JSON.stringify(err));
        }
    });
    setTimeout(fs.unlinkSync(stdout), 10000); // This deletes the local file after uploading it to Slack
};

module.exports = slackFileSpecified;
