const path = require('path')
const fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const os = require("os");

//1

// function getPathAndDir() {
//     console.log("file"+ __filename);
//     console.log("dir"+__dirname);
// }
// getPathAndDir();

//==============================================//

//2

// function getFileName(__filename) {
//     console.log(path.basename(__filename));
// }
// // console.log(__filename);
// getFileName(__filename)

//==============================================//

//3

// function build(obj) {
//     console.log(
//         path.join(obj.dir, obj.name + obj.ext)
//     );
// }
// build({
//     dir: "/test",
//     name: "app",
//     ext: ".js"
// });

//==============================================//

//4

// function getExt(__filename) {
//     return path.extname(__filename);
// }
// console.log(getExt(__filename));

//==============================================//

//5

// function myParse(__filename) {
//     let res =  path.parse(__filename)
//     return {
//         name : res.name,
//         ext : res.ext
//     }
// }

// console.log(myParse(__filename));

//==============================================//

//6

// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }

// console.log(isAbsolutePath("/home/user/file.txt"));

//==============================================//

//7

// function joinSegments(...segments) {
//     return path.join(...segments);
// }

// console.log(joinSegments("src", "components", "App.js"));

//==============================================//

//8

// function myResolve(myPath) {
//     return path.resolve(myPath);
// }

// console.log(myResolve('./index.js'));

//==============================================//

//9

// function joinTwoPaths(path1, path2) {
//     return path.join(path1, path2);
// }

// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

//==============================================//

//10

// function deleteFileAsync(filePath) {
//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.error("Error deleting file:", err.message);
//         } else {
//             console.log(`${path.basename(filePath)} is deleted.`);
//         }
//     });
// }

// deleteFileAsync("D:/Route/Back-end/Assignments/Mai Bakry Ahmed - C45 Node.js 10Am-4Pm (Dokki) Offline - Assignment-2/test/test");

//==============================================//

//11

// function createFolder(folderPath) {
//     try {
//         fs.mkdirSync(folderPath);
//         return "success";
//     } catch (err) {
//         return `Error: ${err.message}`;
//     }
// }

// console.log(createFolder("D:/Route/Back-end/Assignments/Mai Bakry Ahmed - C45 Node.js 10Am-4Pm (Dokki) Offline - Assignment-2/nw"));

//==============================================//

//12

// emitter.on("start", () => {
//     console.log("Welcome event triggered!");
// });

// emitter.emit("start");

//==============================================//

//13

// emitter.on("login", (username) => {
//     console.log(`User logged in: ${username}`);
// });

// emitter.emit("login", "Ahmed");

//==============================================//

//14

// function read(filePath) {
//     return fs.readFileSync(filePath, "utf-8")
// }

// console.log(read("./test.txt"));

//==============================================//

//15

// function write(filePath, content) {
//     return fs.writeFileSync(filePath, content, "utf-8")
// }

// console.log(write("./test.txt", "@@@Mai"));

//==============================================//

//16

// function fileExist(filePath) {
//         return fs.existsSync(filePath);
// }
// console.log(fileExist("./test.txt"));

//==============================================//

//17

// function getOSInfo() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }
// console.log(getOSInfo());

//==============================================//

//18 BOUNS

// function findKthPositive(arr, k) {
//     let missingCount = 0;
//     let current = 1;
//     let i = 0;

//     while (true) {
//         if (i < arr.length && arr[i] === current) {
//             i++;
//         } else {
//             missingCount++;
//             if (missingCount === k) return current;
//         }
//         current++;
//     }
// }
// console.log(findKthPositive([2, 3, 4, 7, 11], 5)); 
// console.log(findKthPositive([1, 2, 3, 4], 2));