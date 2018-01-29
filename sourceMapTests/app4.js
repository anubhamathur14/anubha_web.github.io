//This javascript file has an invalid Source with a webPack url. Also throws exceptions.

function testInvalidSourceMap() { // Should throw an exception
  doesNotExist.Something();
  getRectArea(3, 'A');
}

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}
//# sourceMappingURL=app4.js.map
