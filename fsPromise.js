const { error } = require("node:console")
const fs = require("node:fs/promises")

console.log("First");

fs.readFile("demofile.txt", "utf-8")
.then((data) => console.log(data))
.catch((error) => console.log(error))

console.log("Second");
