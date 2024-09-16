console.log("This is Global Core Module bcz it is not import"); //Global Core Module

const myFile = require("fs");

myFile.writeFileSync(
  // Local Core Module
  "coreModules.txt",
  "This is Local Core Module bcz it is import"
);
