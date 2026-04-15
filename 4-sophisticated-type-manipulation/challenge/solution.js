"use strict";
function processData(data) {
    if (typeof data === "number") {
        console.log(`Processing a number: ${data}`);
    }
    else if (typeof data === "string") {
        console.log(`Processing a string: ${data}`);
    }
    else if (Array.isArray(data) && data.length > 0) {
        console.log(`Processing an array: ${data}`);
    }
    else if (typeof data === "object") {
        console.log(`Processing an object: ${data}`);
    }
}
processData(0);
processData('asd');
processData([0, 'asd']);
processData({ asd: 0, 0: 'asd' });
