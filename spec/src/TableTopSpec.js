describe("TableTop", function() {
    var TableTop = require('../../src/TableTop');
    var tableTop;

    beforeEach(function() {
        tableTop = new TableTop(5, 5);
    });

    it("Should have 5 by 5 dimension", function() {
        expect(tableTop.xSize).toEqual(5);
        expect(tableTop.ySize).toEqual(5);
        expect(tableTop.xStartPosition).toEqual(0);
        expect(tableTop.yStartPosition).toEqual(0);
    });
});