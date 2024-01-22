const assert = require("assert");

const fullwidthLatin = require("./index.js");

assert.equal(fullwidthLatin("Hello, World!"), "Ｈｅｌｌｏ, Ｗｏｒｌｄ!");
assert.equal(fullwidthLatin("Ｈｅｌｌｏ, Ｗｏｒｌｄ!"), "Ｈｅｌｌｏ, Ｗｏｒｌｄ!");
