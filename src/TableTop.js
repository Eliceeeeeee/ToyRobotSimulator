'use strict';

/**
 * Initialize table top with x and y size
 */
function TableTop(xSize, ySize){
    this.xSize = xSize;
    this.ySize = ySize;
    this.xStartPosition = 0;
    this.yStartPosition = 0;
}

//export the class
module.exports = TableTop;