var assert = require("assert");
var Record = require("../record.js");


describe("Records", function(){
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    record1 = new Record( "ACDC", "Back in Black", 20, 100);
    record2 = new Record( "Iron Maiden", "Fear of the dark", 20, 50);
    record3 = new Record( "Guns and Roses", "G N' R Lies", 20, 30);
    record4 = new Record( "Led Zeppelin", "Led Zeppelin IV", 20,90);

  })

  it("Should have an Artist", function() {
    assert.equal("ACDC",record1.artist);
  });

  it("Should have a title", function() {
    assert.equal("Back in Black",record1.title);
  });

  it("Should have a price", function() {
    assert.equal(20,record1.price);
  });


});