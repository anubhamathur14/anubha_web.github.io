console.log("This javascript file has an invalid Source with a webPack url.");

function testInvalidSourceMap() { // Should throw an exception
  getRectArea(3, 'A');
}

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}
