const fs = require('fs');
const data = require("./dummyData.json");

console.log(data, "=> hasil import")

const readJson = () => {
  fs.readFile('dummyData.json', 'utf-8', (err, fileData) => {
    if (err) return console.error("Error reading file:", err);

    try {
      console.log(fileData);

      const data = JSON.parse(fileData);

      console.log(data, "=>> object")

      const userToUpdate = data.find(user => user.id === 3);
      if (userToUpdate) {
        userToUpdate.first_name = "Farrel";
        userToUpdate.last_name = "Brian";
        userToUpdate.email = "farrelbrian@gmail.com";
        userToUpdate.gender = "Male";
      } else {
        console.warn("User with ID 3 not found.");
      }

      fs.writeFile('dummyData.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return console.error("Error writing file:", err);
        console.log("File successfully updated!");
      });
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
    }
  });
};

readJson();
