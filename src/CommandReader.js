'use strict';

/**
 * CommandReader constructor
 * @constructor
 */
var CommandReader = function() {};

/**
 * Validate first command is PLACE command
 * @param {String} firstCommand Input file name to validate
 * @returns {boolean}
 */

CommandReader.prototype.isValidFirstCommand = function(firstCommand) {
    var commandDetails = firstCommand.toUpperCase().split(" ");
    if(commandDetails[0] == "PLACE"){
        return true;
    }
    return false;
};

/**
 * get commands by remove the arguments also,
 * eg: PLACE 1,2,NORTH
 * return: PLACE
 * @param {String} command Input file name to validate
 * @returns {String}
 */

CommandReader.prototype.getCommandWithoutArguments = function(command) {

    //when without argument, just return the command
    if(command.indexOf(" ") == -1){
        return command;
    }

    //when have argument, return the command by remove the arguments after it
    return command.slice(0, command.indexOf(" "));
};

/**
 * get commands by remove the arguments also,
 * eg: PLACE 1,2,NORTH
 * return: PLACE
 * @param {String} command Input file name to validate
 * @returns {String}
 */

CommandReader.prototype.getCommandArguments = function(command) {
    var spaceIndex = command.indexOf(" ");
    var argumentString = command.slice(spaceIndex);
    var argumentArray =  argumentString.split(",");
    var argumentArrayWithoutSpace =  argumentArray.map(function(s) {return s.trim() });
    return argumentArrayWithoutSpace;
};

module.exports = CommandReader;