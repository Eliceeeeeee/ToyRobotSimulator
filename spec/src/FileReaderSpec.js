var path = require('path');
var filePath = "../testData/commands_2.txt";
var emptyFilePath = "../testData/commands_7.txt";

describe("FileReader", function() {
    var FileReader = require('../../src/FileReader');
    var fileReader;

    beforeEach(function() {
        fileReader = new FileReader();
    });

    it('should return array of commands', function(done) {
        let readCommandsWhenValid = function() { fileReader.readCommands(path.join(__dirname, filePath), function(err){}); };
        expect(readCommandsWhenValid).toBeTruly;
        done();
    });

    it('should throw an error if empty text file', function(done) {
        let readCommandsWhenEmptyTextFile = function() { fileReader.readCommands(path.join(__dirname, emptyFilePath), function(err){}); };
        expect(readCommandsWhenEmptyTextFile).toBeFalsy;
        done();
    });

    it('should return array of commands', function(done) {
        let readCommandsWhenValid = function() { fileReader.readCommands(path.join(__dirname, filePath), function(err){}); };
        expect(readCommandsWhenValid).toBeTruly;
        done();
    });

    it('return true when a valid text file with .txt extension', function(done) {
        let readCommandsWhenNotValidTextFile = function() { fileReader.validateFileType(path.join(__dirname, filePath), function(err){}); };
        expect(readCommandsWhenNotValidTextFile).toBeTruly;
        done();
    });

    it('should throw an error if the file is not a text file', function(done) {
        let readCommandsWhenNotTextFile = function() { fileReader.validateFileType(path.join(__dirname, 'data/nonTextFile.xml'), function(err){}); };
        expect(readCommandsWhenNotTextFile).toBeFalsy;
        done();
    });

    it('should throw an error if the file is not valid text file', function(done) {
        let readCommandsWhenNotFile = function() { fileReader.validateFileType(path.join(__dirname, '1.'), function(err){}); };
        expect(readCommandsWhenNotFile).toBeFalsy;
        done();
    });
});
