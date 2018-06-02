describe("Robot", function() {
    var Robot = require('../../src/Robot');
    var TableTop = require('../../src/TableTop');
    var robot;
    var tableTop;

    beforeEach(function() {
        robot = new Robot();
        tableTop = new TableTop(5, 5);
    });

    describe("When robot is place to valid a position", function() {
        var xPosition = 3;
        var yPosition = 2;

        beforeEach(function() {
            robot.checkValidPosition(xPosition, yPosition, tableTop);
        });

        it("should be return true", function() {
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot is place to invalid a position", function() {
        var invalid_xPosition = -3;
        var yPosition = 2;

        beforeEach(function() {
            robot.checkValidPosition(invalid_xPosition, yPosition, tableTop);
        });

        it("should be return false", function() {
            expect(robot.valid).toEqual(false);
        });
    });

    describe("When robot is place to a position", function() {
        var xPosition = 3;
        var yPosition = 2;
        var facingDirection = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
        });

        it("robot will success put on table top", function() {
            expect(robot.x).toEqual(xPosition);
            expect(robot.y).toEqual(yPosition);
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot move one step position when face North and not move out of table top", function() {
        var xPosition = 3;
        var yPosition = 2;
        var facingDirection = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should success to move one step", function() {
            expect(robot.x).toEqual(xPosition);
            expect(robot.y).toEqual(parseInt(yPosition) +parseInt(1));
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot move one step position when face North and move out of table top", function() {
        var xPosition = 3;
        var yPosition = 5;
        var facingDirection = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should failed to move one step", function() {
            expect(robot.x).toEqual(xPosition);
            expect(robot.y).toEqual(parseInt(yPosition) + parseInt(1));
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(false);
        });
    });
    
    describe("When robot move one step position when face South and not move out of table top", function() {
        var xPosition = 3;
        var yPosition = 5;
        var facingDirection = "SOUTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should success to move one step", function() {
            expect(robot.x).toEqual(xPosition);
            expect(robot.y).toEqual(parseInt(yPosition) - parseInt(1));
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot move one step position when face South and move out of table top", function() {
        var xPosition = 3;
        var yPosition = 0;
        var facingDirection = "SOUTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should failed to move one step", function() {
            expect(robot.x).toEqual(xPosition);
            expect(robot.y).toEqual(parseInt(yPosition) - parseInt(1));
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(false);
        });
    });

    describe("When robot move one step position when face East and not move out of table top", function() {
        var xPosition = 3;
        var yPosition = 3;
        var facingDirection = "EAST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should success to move one step", function() {
            expect(robot.x).toEqual(parseInt(xPosition) + parseInt(1));
            expect(robot.y).toEqual(yPosition);
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot move one step position when face East and move out of table top", function() {
        var xPosition = 5;
        var yPosition = 3;
        var facingDirection = "EAST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should failed to move one step", function() {
            expect(robot.x).toEqual(parseInt(xPosition) + parseInt(1));
            expect(robot.y).toEqual(yPosition);
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(false);
        });
    });

    describe("When robot move one step position when face West and not move out of table top", function() {
        var xPosition = 3;
        var yPosition = 3;
        var facingDirection = "WEST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should success to move one step", function() {
            expect(robot.x).toEqual(parseInt(xPosition) - parseInt(1));
            expect(robot.y).toEqual(yPosition);
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(true);
        });
    });

    describe("When robot move one step position when face West and move out of table top", function() {
        var xPosition = 0;
        var yPosition = 3;
        var facingDirection = "WEST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.move(tableTop);
        });

        it("robot should failed to move one step", function() {
            expect(robot.x).toEqual(parseInt(xPosition) - parseInt(1));
            expect(robot.y).toEqual(yPosition);
            expect(robot.facing).toBe(facingDirection);
            expect(robot.valid).toEqual(false);
        });
    });

    describe("When robot move turn left when facing north", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.left(tableTop);
        });

        it("robot should turn to west", function() {
            expect(robot.facing).toBe("WEST");
        });
    });

    describe("When robot move turn left when facing south", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "SOUTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.left(tableTop);
        });

        it("robot should turn to east", function() {
            expect(robot.facing).toBe("EAST");
        });
    });

    describe("When robot move turn left when facing east", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "EAST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.left(tableTop);
        });

        it("robot should turn to north", function() {
            expect(robot.facing).toBe("NORTH");
        });
    });

    describe("When robot move turn left when facing west", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "WEST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.left(tableTop);
        });

        it("robot should turn to south", function() {
            expect(robot.facing).toBe("SOUTH");
        });
    });


    describe("When robot move turn right when facing north", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.right(tableTop);
        });

        it("robot should turn to east", function() {
            expect(robot.facing).toBe("EAST");
        });
    });

    describe("When robot move turn right when facing south", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "SOUTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.right(tableTop);
        });

        it("robot should turn to west", function() {
            expect(robot.facing).toBe("WEST");
        });
    });

    describe("When robot move turn right when facing east", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "EAST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.right(tableTop);
        });

        it("robot should turn to south", function() {
            expect(robot.facing).toBe("SOUTH");
        });
    });

    describe("When robot move turn right when facing west", function() {
        var xPosition = 0;
        var yPosition = 0;
        var facingDirection = "WEST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facingDirection);
            robot.right(tableTop);
        });

        it("robot should turn to north", function() {
            expect(robot.facing).toBe("NORTH");
        });
    });
});