const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE FOR assertEqual
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
