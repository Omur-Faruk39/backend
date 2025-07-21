//for that we need to change package.json "type": "commonjs" to "type": "module"

// import path from "path";

// console.log(
//   path.basename("E:/code/backend/nodejs/20-07-25 path module/index.js")
// );

// this module access path with "/" like "/src/page". but windows default path system is "\src\page". so you need to change "\" by "/"
const path = require("path");

// path.basename: takes a path and file extension(optional) and return file name with extension
const fileName = path.basename(__filename); //index.js

// path.delimiter: this is a property that return deliniter for the OS. Like for window the delimiter is ";".
const delimiter = path.delimiter;
// this is use full when we work in a team and all member have different os but we want to change env variable programectly
const process = require("process");
const paths = process.env.PATH.split(path.delimiter);

// path.dirname: this method take a file path and return dirname same like "__dirname".
const dirname = path.dirname(__filename);

// path.extension: this method take a file path and return file extension.
const extension = path.extname(__filename); // .js

// path.formate: this method take a path object and return path string. path object should have base, dir, ext, name, root properties
const pathObj = {
  root: "E:\\",
  dir: "E:\\code\\backend\\nodejs\\20-07-25 path module",
  base: "index.js",
  ext: ".js",
  name: "index",
};
const pathString = path.format(pathObj);

// path.matchesGlob: this method take path and pattern and return true if the pattern match otherwish return false.
const isMatch = path.matchesGlob(__filename, "**/index.js");

// path.isAbsolute: take a path and return true if the path is absolute other return false
const isAbsolute = path.isAbsolute(__filename);

// path.join: The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.
const joinedPath = path.join("/foo", "bar", "baz/asdf", "quux", "..");
// path.join("foo", {}, "bar"); // Throws 'TypeError: Path must be a string. Received {}'

// path.normalize: this method normalizes the given path, resolving '..' and '.' segments by taking a path.
const normalizedPath = path.normalize("..\\page\\index.js"); // ../page/index.js

// path.parse: this method take a path and return path object. reverse like path.formate. A TypeError is thrown if path is not a string.
const parsedPath = path.parse(__filename);
