const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

var graph1 = [
    [1, 2],
    [2, 1],
    []
];
var expected = true;
assert(hasCycle(graph1) == expected);

var graph2 = [
    [1, 2],
    [1, 3],
    [1, 4],
    [4, 1],
    [2, 3],
    [3, 4]
];
var expected = true;
assert(hasCycle(graph2) == expected);

var graph3 = [
    [1, 2],
    [],
    [1],
    [3]
];
var expected = false;
assert(hasCycle(graph3) == expected);

var graph4 = [
    [1, 3],
    [2, 3],
    [3, 1],
    [4],
    []
];
var expected = true;
assert(hasCycle(graph4) == expected);