'use strict';

var fs = require('fs');

/**
 * FileReader constructor
 * @constructor
 */
var FileReader = function() {};

/**
 * Validate file type
 * @param {String} fileName Input file name to validate
 * @param {Function} callBack Callback function
 */

FileReader.prototype.readCommands = function(fileName, callBack){
    if(fileName == null)
    {
        callBack(new RangeError('Please provide a input text file'));
        return false;
    }
    this.validateFileType(fileName, function (errorMessage, validFileName) {
            if (errorMessage){
                callBack(new ReferenceError(errorMessage));
                return false;
            }
            // Read file into memory if valid
            fs.readFile(validFileName, { encoding: 'utf-8' }, function(errorMessage, fileData) {
                if (errorMessage) {
                    callBack(new ReferenceError('File doesn\'t exist or cannot be accessed'));
                    return false;
                }

                // If contents are empty, throw an error
                if (!fileData.length) {
                    callBack(new RangeError('File content cannot be empty'));
                    return false;
                }
                callBack(null, fs.readFileSync(validFileName).toString().split("\n"));
            });
        }
    );
}

/**
 * Validate file type
 * @param {String} fileName Input file name to validate
 * @param {Function} callBack Callback function
 */

FileReader.prototype.validateFileType = function(fileName, callBack){
    var splitArray = fileName.split('.');
    var arrayLength = splitArray.length;

    //Example invalid extension: 1.
    if (arrayLength === 1 && splitArray[0] === fileName) {
        callBack(new TypeError('Toy Simulator requires a valid .txt file'));
        return false;
    }

    //Example invalid extension: 1.xml
    if(splitArray[arrayLength -1] != 'txt')
    {
        callBack(new TypeError('Toy Simulator use only file with .txt extension'));
        return false;
    }

    callBack(null, fileName);
}
module.exports = FileReader;