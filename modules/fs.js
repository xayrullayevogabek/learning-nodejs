const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.join(__dirname, "javascript"))) {
  fs.mkdir(path.join(__dirname, "javascript"), (err) => {
    if (err) throw new Error();
    console.log("Folder was created successfully");
  });
} else {
  fs.writeFile(
    path.join(__dirname, "javascript", "app.js"),
    'console.log("Hello World")',
    (err) => {
      if (err) throw new Error();
      console.log("File was created successfully");
      fs.readFile(
        path.join(__dirname, "javascript", "app.js"),
        "utf-8",
        (err, data) => {
          if (err) throw new Error();
          console.log(data);
        }
      );
    }
  );
}

// fs.mkdir() for creating a new folder 
// fs.writeFile() for creating a new file and writing data to it
// fs.readFile() for reading data from a file
// fs.existsSync() for checking if a file or folder exists
// path.join() for joining the path of the file or folder

