const fs = require("fs");
fs.writeFile("./test.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File created !");
  fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);
    fs.appendFile("./test.txt", " Let's learn more!", (err) => {
      if (err) throw err;
      console.log("File Updated Successfully");
      fs.readFile("./test.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Updated File Content:", data);
      });
    });
  });
});

// this code cause callback hell.


