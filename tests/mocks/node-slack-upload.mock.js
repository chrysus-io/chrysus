var shouldError = false;

function Slack(token) {

};

Slack.prototype.uploadFile = function(data, callback) {
    if(shouldError) {
        return callback("error");
    }
};

var returnError = function(flag) {
    shouldError = flag;
};

module.exports = Slack;
module.exports.returnError = returnError;
