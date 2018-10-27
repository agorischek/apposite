var mocha = require("mocha");
var chai = require("chai");
var assert = chai.assert;

var apposite = require("../lib/index.js");

describe("Apposite", function(){
    it("should pass through a general section", function(){
        assert.equal(apposite.render("@@@ * @@@\nABC"), "ABC\n");
    });
});
