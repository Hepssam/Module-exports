const fs = require("node:fs");
const zlib = require("node:zlib");
const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./demofile.txt", {
encoding: "utf-8",
highWaterMark:2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./demofile1.txt.gz"));
const writeableStream = fs.createWriteStream("./demofile1.txt");
readableStream.pipe(writeableStream);
