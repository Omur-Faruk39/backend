const { saveUser } = require("./createUser/createUser.js");
const { login } = require("./login/login.js");
const url = require("url");

const main = {};

main.get = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  const massege = login(query);

  res.end(massege);
};

main.post = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const data = JSON.parse(body);

    const massege = saveUser(data);

    res.end(massege);
  });
};

module.exports = main;
