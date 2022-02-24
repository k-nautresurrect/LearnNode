const logger = require("./logger.js");
// how to import node js mmodule using es6 syntax
// import log as lg from "./logger.mjs";

console.log(logger);
var message = "";

console.log(this);
console.log(global);
// console.log(index.message);

console.log(module.message);
console.log(message);
console.log(module);
console.log(this.message);
console.log(logger.logs("hello"));

// console.log(lg.logs("hello"));

// used in providing the path in the different field
const path = require("path");
const file = path.parse(__filename);

console.log(file);
console.log(__filename);

const dir = path.parse(__dirname); // ../ in respect to current file.
console.log(dir);

console.log(path);

// OS

// fs
const fs = require("fs");

const fsFileSync = fs.readdirSync("./");

console.log(fsFileSync.toString());

const EventEmitter = require("events");
console.log(EventEmitter);

const e = new EventEmitter();

console.log(e);
const os = require("os");

console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.tmpdir());
console.log(os.loadavg());
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.type());
console.log(os.userInfo());
console.log(os.arch());

console.log(path.posix);

let lt = path.parse(__filename);

fs.readdir("./", (error, file) => {
  if (error) console.log(error);
  else console.log(file);
});

const objValue = {
  id: 1,
  url: "google.com",
};

// Register a listner
e.on("message", (arg) => {
  console.log("listener on message");
  console.log(arg.id);
  console.log(arg.url);
});

// raised an event
e.emit("message", objValue);
const http = require("http");

const Liveserver = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }

  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

/*
Liveserver.on("connection", (socket) => {
  console.log(socket);
});
*/

Liveserver.listen(3000);

console.log("listenening on port 3000...");
