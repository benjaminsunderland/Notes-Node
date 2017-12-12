console.log("Starting Application")

const fs = require("fs");
const os = require("os")
const notes = require("./notes.js")
const _ = require("lodash")
var result = notes.addNote();
console.log(result)
var result2 = notes.add(2, 9);
console.log("Result:" + " " + result2);

console.log(_.isString(true));
console.log(_.isString("benjamin"));
console.log(_.uniq([1,2,1,1,1,2,2,2,3,3,3,3]));
console.log(_.isInteger(3));

// var user = os.userInfo();
//
//
// fs.appendFileSync("greetings.txt", `Hello ${user}`);
