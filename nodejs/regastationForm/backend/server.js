// import http module
const http = require("http");
const { saveUser } = require("./createUser/createUser.js");
const main = require("./route.js");

// create a function to handle incoming requests
function requestHandler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const method = req.method.toLowerCase();

  if (method === "get") {
    main.get(req, res);
  } else if (method === "post") {
    main.post(req, res);
  } else {
    res.end("Invalid request");
  }
}

// create an HTTP server
const server = http.createServer(requestHandler);

// start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
