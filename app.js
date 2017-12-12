console.log("Starting Application")

const fs = require("fs");
const os = require("os")
const notes = require("./notes.js")

var result = notes.addNote();
console.log(result)
var result2 = notes.add(2, 9);
console.log("Result:" + " " + result2)
// var user = os.userInfo();
//
//
// fs.appendFileSync("greetings.txt", `Hello ${user}`);
