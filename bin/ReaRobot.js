'use strict';

var clc = require('cli-color');
var app = require('../app.js');

/**
 * Get input file argument
 */
var fileName = process.argv[2];
/**
 * Run the simulation
 */
app.runSimulator(fileName, function(err, robot) {
    // If error, let the user know
    if (err) {
        console.log(clc.white.bgRed('ERROR:') + ' ' + clc.red(err.message));
        return false;
    }
});
