const fullWidth = require('./dist/index.js').fullWidth;

var inputText = "Hello, World!";
var outputText = fullWidth(inputText);
console.log(outputText);

var inputText = "Ｈｅｌｌｏ, Ｗｏｒｌｄ!";
var outputText = fullWidth(inputText);
console.log(outputText);
