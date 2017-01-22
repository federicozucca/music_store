var assert = require("assert");
var Record = require("../record.js");
var Store = require("../recordStore.js");
var Collector = require("../recordCollector.js");


describe("Collector", function(){
  var store;
  var record1;
  var record2;
  var record3;
  var record4;
  var record5;
  var collector;

  beforeEach(function(){
    store = new Store("Fede's Music Store", "Cagliari");
    record1 = new Record( "ACDC", "Back in Black", 20, 100);
    record2 = new Record( "Iron Maiden", "Fear of the dark", 15, 50);
    record3 = new Record( "Guns and Roses", "G N' R Lies", 10, 30);
    record4 = new Record( "Led Zeppelin", "Led Zeppelin IV", 10,90);
    record5 = new Record( "Secret", "Unbelievable price", 10,1090);
    collector = new Collector( "Federico", 1000)
  })

  it("Should have a name", function() {
    assert.equal("Federico",collector.name);
  })

  it("Should have a capital", function() {
    assert.equal(1000,collector.balance);
  })

  it("Should buy a record decreasing the balance", function() {
    collector.buyRecord(record1)
    assert.equal(980,collector.balance);
  })

  it("Should not buy if not enough money", function() {
    collector.buyRecord(record5);
  })

  it("Should buy adding in his collection", function() {
    collector.buyRecord(record1);
    assert.equal(1,collector.records.length);
  })

  it("Should sell a record increasing the balance", function() {
    collector.sellRecord(record1)
    assert.equal(1020,collector.balance);
  })

  it("Should sell removing from his collection", function() {
    collector.buyRecord(record1);
    collector.buyRecord(record2);
    collector.sellRecord(record1);
    assert.equal(1,collector.records.length);
  })



})