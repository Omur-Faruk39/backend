const path = require("path");
const fs = require("fs");

const user = {};

user.saveUser = (data) => {
  const fileName = (() => {
    const email = data.email;
    const trimEmail = email.trim();
    const newEmail = trimEmail.replace(".com", "");
    return newEmail;
  })();

  const filePath = path.join(__dirname, "../user", `${fileName}.json`);

  if (fs.existsSync(filePath)) {
    return "invalide email";
  } else {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) console.error("Failed to write user file:", err);
      else console.log("User file saved successfully.");
    });
    return "data save successfully";
  }
};

module.exports = user;
