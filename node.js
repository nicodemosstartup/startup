var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + _filename + "\nWrote: " + out + "To: " + outfile);
