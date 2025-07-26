const fs = require("fs");
const path = require("path");

const main = {};

main.login = (data) => {
  const fileName = (() => {
    const email = data.email;
    const trimEmail = email.trim();
    const newEmail = trimEmail.replace(".com", "");
    return newEmail;
  })();

  const filePath = path.join(__dirname, "../user", `${fileName}.json`);

  if (!fs.existsSync(filePath)) {
    return "you email in invalid";
  } else {
    const user = JSON.parse(fs.readFileSync(filePath));

    if (user.password === data.password) {
      return user.name;
    } else {
      return "you password is invalide";
    }
  }
};

module.exports = main;
