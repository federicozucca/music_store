var assert = require("assert");
var Record = require("../record.js");
var Store = require("../recordStore.js");


describe("Store", function(){
  var store;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    store = new Store("Fede's Music Store", "Cagliari");
    record1 = new Record( "ACDC", "Back in Black", 20, 100);
    record2 = new Record( "Iron Maiden", "Fear of the dark", 15, 50);
    record3 = new Record( "Guns and Roses", "G N' R Lies", 10, 30);
    record4 = new Record( "Led Zeppelin", "Led Zeppelin IV", 10,90);
  })

  it("Should have a name", function() {
    assert.equal("Fede's Music Store",store.name);
  });

  it("Should have a city", function() {
    assert.equal("Cagliari",store.city);
  });

  it("Should have no records at the beginning", function() {
    assert.deepEqual([],store.records)
  });

  it("Should start with the balance of 0", function() {
    assert.equal(0, store.balance)
  });

  it("Should add records", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    assert.equal(4, store.records.length)
  });

  it("Should list all the records", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.listRecords();
    assert.deepEqual([{"artist": "ACDC","price": 20,"title": "Back in Black","quantity":100},
      {"artist": "Iron Maiden","price": 15,"title": "Fear of the dark","quantity":50}], store.records)
  });


  it("Should sell records increasing the store balance", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.sellRecord(record1,1);
    store.sellRecord(record2,1);
    assert.equal(35, store.balance)
  });

  it("Should sell records decreasing the quantity of records", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.sellRecord(record1,2);
        assert.equal(98, record1.quantity)
  });

  it("Should give us the value of the inventory", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
        assert.equal(3950, store.inventory())
  });

  it("Should have a name", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.sellRecord(record1,2);
    store.inventory();
    store.financialSituation();
  });

});
