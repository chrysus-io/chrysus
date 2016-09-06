////////////////////////////////////////////////////////////////////////////////
// Chrysus Engine //
////////////////////
// Description: Remote task bot engine based on JavaScript/Node.js and Redis Pub/Sub using JSON
// Author: Ernest G. Wilson II <ErnestGWilsonII@gmail.com> (https://github.com/ernestgwilsonii)
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Ensure startup configuration  //
///////////////////////////////////
// Verify that all of the needed environment variables are available to start the Chrysus Engine
// Note: These are typically set in: /etc/systemd/system/chrysus.service
// For console debug and testing you may manually set these variables by:
// export CHRYSUS_REDISHOST='127.0.0.1'
// export CHRYSUS_REDISPORT='6379'
// export CHRYSUS_REDISPASS='RedisPasswordGoesHere'
// export CHRYSUS_REDISCHAN='incoming'
// node chrysus.js
(function () {
    if (!process.env.CHRYSUS_REDISHOST) {
        throw new Error("Error: CHRYSUS_REDISHOST start-up environment variable is not set!");
    }
    if (!process.env.CHRYSUS_REDISPORT) {
        throw new Error("Error: CHRYSUS_REDISPORT start-up environment variable is not set!");
    }
    if (!process.env.CHRYSUS_REDISPASS) {
        throw new Error("Error: CHRYSUS_REDISPASS start-up environment variable is not set!");
    }
    if (!process.env.CHRYSUS_REDISCHAN) {
        throw new Error("Error: CHRYSUS_REDISCHAN start-up environment variable is not set!");
    }
})();
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Global variables //
//////////////////////

// Require specific Node.js modules / should be in package.json
var redis = require("redis");

// Modules built-in to Chrysus
var taskDissector = require("./src/dissectors/task");

// Logging
var Severity = require("./src/logger/severity");
var severity = Severity.info; // Standard level for prod is Severity.info
var logger = require("./src/logger/logger");
logger.setSeverity(severity);

// Populate global Redis connection parameters variables based on environment variables
var redisHost = process.env.CHRYSUS_REDISHOST; // 'RedisIPAddressHere'
var redisPort = process.env.CHRYSUS_REDISPORT; // 'RedisPortHere'
var redisPass = process.env.CHRYSUS_REDISPASS; // 'RedisPasswordHere'
var redisChan = process.env.CHRYSUS_REDISCHAN; // 'RedisChannelHere'
logger.debug("redisHost : " + redisHost);
logger.debug("redisPort : " + redisPort);
logger.debug("redisPass : " + redisPass);
logger.debug("redisChan : " + redisChan);
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Redis subscribe (incoming) //
////////////////////////////////////////////////////////////

// Create a Redis Pub/Sub style subscriber client and connect
var subscriber = redis.createClient(redisPort, redisHost);
var dbAuth = function() { subscriber.auth(redisPass); };
subscriber.addListener('connected', dbAuth);
subscriber.addListener('reconnected', dbAuth);
logger.info("Chrysus Engine: Sending authentication password to Redis service: " + redisHost + " on port: " + redisPort);
dbAuth();

// Subscribe to a Redis channel and listen for messages
subscriber.on("message", function(channel, message) {
    logger.info("message received on channel: " + channel);
    logger.debug("channel: " + channel + " message: "  + message);

    var messageObj = JSON.parse(message);


    ////////////////////////////////////////////////////////////
    // Task type dissector loop //
    ////////////////////////////////////////////////////////////

    logger.debug("Number of tasks received in the array in the last message was: " + messageObj.message.tasks.length);

    // Loop through the incoming message and get the list of tasks
    for (var i = 0; i < messageObj.message.tasks.length; i++) {
        var taskDetails = messageObj.message.tasks[i]; // Populate the taskDetails with the current task JSON data

        // Defines this current task
        var task = taskDetails.task; // Populate the task with the current task JSON data
        logger.info("type: " + task);
        logger.debug("taskDetails: " + JSON.stringify(taskDetails));

        // Uses the case statements in src/dissectors/task.js
        taskDissector(task, taskDetails);
    }
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Subscribe to messages in the specified Redis channel to get task[s] and output[s]
subscriber.subscribe(redisChan);
logger.info("Connected to Redis service: " + redisHost + " on port: " + redisPort);
////////////////////////////////////////////////////////////
