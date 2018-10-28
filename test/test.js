var mocha = require("mocha");
var chai = require("chai");
var assert = chai.assert;

var apposite = require("../lib/index.js");

describe("Apposite", function(){
    it("should pass through a general section", function(){
        assert.equal(apposite.render("@@@ * @@@\nABC"), "ABC\n");
    });
    it("should ignore a null target", function(){
        assert.equal(apposite.render("@@@ * @@@\nABC", null), "ABC\n");
    });
    it("should render for a target", function(){
        assert.equal(apposite.render("@@@ * @@@\nABC\n@@@ a @@@\nDEF\n@@@ b @@@\nGHI", "a"), "ABC\nDEF\n");
    });
    it("should accept a custom marker", function(){
        assert.equal(apposite.render("&& * &&\nABC", null, "&&"), "ABC\n");
    });
});
