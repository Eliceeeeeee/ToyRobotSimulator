'use strict';

var clc = require('cli-color');
/**
 * Robot constructor
 * @constructor
 */
var Robot = function() {};

/***
 * Valid position of the robot on table top
 * @param xPosition
 * @param yPosition
 * @param tableTop
 */

Robot.prototype.checkValidPosition = function(xPosition, yPosition, tableTop) {
    this.valid= true;

    if ((xPosition > (tableTop.xStartPosition + (tableTop.xSize - 1))) ||
        (xPosition < tableTop.xStartPosition) ||
        (yPosition > (tableTop.yStartPosition + (tableTop.ySize - 1))) ||
        (yPosition< tableTop.yStartPosition))
    {
        //Robot is not in the table
        this.valid= false;
    }
};

/***
 * Place the robot on table top
 * @param xPosition
 * @param yPosition
 * @param facingDirection
 * @param valid
 */
Robot.prototype.place = function(xPosition, yPosition, facingDirection) {
    this.x = parseInt(xPosition);
    this.y = parseInt(yPosition);
    this.facing = facingDirection;
    this.valid = true;
};

/***
 * Move one step position within table top
 * @param tableTop
 */
Robot.prototype.move = function(tableTop) {
    var facing = this.facing;
    switch(facing){
        case 'NORTH':
            this.y += 1;
            break;
        case 'SOUTH':
            this.y -= 1;
            break;
        case 'EAST':
            this.x += 1;
            break;
        case 'WEST':
            this.x -= 1;
            break;
    }
    this.checkValidPosition(this.x, this.y, tableTop);
};
/***
 * change the direction to left
 */
Robot.prototype.left = function() {
    switch(this.facing){
        case 'NORTH':
            this.facing = 'WEST';
            break;
        case 'SOUTH':
            this.facing = 'EAST';
            break;
        case 'EAST':
            this.facing = 'NORTH';
            break;
        case 'WEST':
            this.facing = 'SOUTH';
            break;
    }
};

/***
 * change the direction to right
 */
Robot.prototype.right = function() {
    switch(this.facing){
        case 'NORTH':
            this.facing = 'EAST';
            break;
        case 'SOUTH':
            this.facing = 'WEST';
            break;
        case 'EAST':
            this.facing = 'SOUTH';
            break;
        case 'WEST':
            this.facing = 'NORTH';
            break;
    }
};

module.exports = Robot;