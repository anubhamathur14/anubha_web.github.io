SourceMap: app3.js.map

function testSourceMapHeader() {
    var arr3 = [6, 4, -2, 8, 7, 0];
    sortAndDisplay3(arr3);
}
function sortAndDisplay3(arr) {
    arr.sort();
    console.log(arr);
}