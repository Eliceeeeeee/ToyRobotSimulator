'use strict';

var clc = require('cli-color');
var Robot = require('./src/Robot');
var FileReader = require('./src/FileReader');
var CommandReader = require('./src/CommandReader');
var TableTop = require('./src/TableTop');
//var Parser = require('./src/Parser');

/**
 * Set up instances for usage
 */
var robot = new Robot();
var fileReader = new FileReader();
var commandReader = new CommandReader();

// With 5 units x 5 units
var tableTop  = new TableTop(5, 5);

/**
 * Application module
 */
var app = {};

/**
 * Read and parse file name
 * @param {String} fileName File to read and parse
 * @param {Function} cb Callback function
 */

app.runSimulator = function(fileName, cb) {
    fileReader.readCommands(fileName, function(err, commandArray) {
        if (err) {
            cb(err);
            return false;
        }

        if(commandArray && commandReader.isValidFirstCommand(commandArray[0])){
            for(var i = 0; i < commandArray.length; i++){
                var command = commandArray[i];
                switch(commandReader.getCommandWithoutArguments(command)){
                    case 'PLACE':
                        var placeArguments = commandReader.getCommandArguments(command);
                        var xPostion = placeArguments[0];
                        var yPostion = placeArguments[1];
                        var facingDirection = placeArguments[2];

                        robot.checkValidPosition(xPostion, yPostion, tableTop);
                        //Skip the others command and return error message
                        if(!robot.valid)
                        {
                            console.log(clc.red("\n\nError:Robot's place the position which make robot out of table top\n\n"));
                            return;
                        }

                        robot.place(xPostion, yPostion, facingDirection);
                        console.log(clc.yellow("\n\nPlace the robot on table top success\n"));
                        console.log(clc.yellow("====================================\n"));
                        break;

                    case 'MOVE':
                        robot.move(tableTop);

                        //Skip the others command and return error message
                        if(!robot.valid)
                        {
                            console.log(clc.red("Error:Robot's move out of table top during step "+ (parseInt(i)+ parseInt(1)) +"\n\n"));
                            return;
                        }
                        break;

                    case 'LEFT':
                        robot.left();
                        break;

                    case 'RIGHT':
                        robot.right();
                        break;
                    case 'REPORT':
                        console.log(clc.blue("Output:" + robot.x + "," + robot.y + "," + robot.facing + "\n\n"));
                        break;

                    default:

                }
            }
        }
        else{
            console.log(clc.red("\n\nError: First command should be PLACE command\n\n"));
        }
    });
};

module.exports = app;