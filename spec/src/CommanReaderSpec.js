describe("CommandReader", function() {
    var CommandReader = require('../../src/CommandReader');
    var commandReader;

    beforeEach(function() {
        commandReader = new CommandReader();
    });

    it("should have PLACE as first command", function() {
        var firstCommand = 'PLACE 0,0,NORTH';
        expect(commandReader.isValidFirstCommand(firstCommand)).toBeTruly;
    });

    describe("Invalid  command", function() {
        var firstCommand = 'MOVE';

        it("First command should be PLACE command", function() {
            expect(commandReader.isValidFirstCommand(firstCommand)).toBeFalsy;
        });
    });

    it("return command without arguments by remove the arguments", function() {
        var commandWithArguments = 'PLACE 0,0,NORTH';
        expect(commandReader.getCommandWithoutArguments(commandWithArguments)).toEqual('PLACE');
    });

    it("return command when it do not have any arguments", function() {
        var commandWithoutArguments = 'REPORT';
        expect(commandReader.getCommandWithoutArguments(commandWithoutArguments)).toEqual('REPORT');
    });

    it("return array of command arguments", function() {
        var commandWithArguments = 'PLACE 0,0,NORTH';
        expect(commandReader.getCommandArguments(commandWithArguments)).toEqual([ '0', '0', 'NORTH' ]);
    });
});