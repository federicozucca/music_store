var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
  this.inventoryValue = 0;
}

RecordStore.prototype={
  addRecord(record){
    this.records.push(record);
  },
  listRecords(){
    this.records.forEach(function(record){
      console.log("\n -----------------------"+"\nArtist: "+record.artist+"\nTitle: "+ record.title + "\nPrice: "+ record.price +"\nQuantity: "+ record.quantity+ "\n -----------------------")
    })
    return this.records;
  },
  sellRecord(record,quantity){
    if (record.quantity>0){
      this.balance +=record.price;
      record.quantity -=quantity;
    }
    else {console.log(record.title + " of ", record.artist + " is 'OUT OF STOCK'")}
  },
  inventory(){
    this.inventoryValue = 0;
    this.records.forEach(function(record){
      this.inventoryValue += record.price*record.quantity;
    }.bind(this))
    return this.inventoryValue;
  },
  financialSituation(){
    console.log("\n -----------------------"+"\nValue of inventory: "+this.inventoryValue+"\nCash: "+ this.balance+ "\n -----------------------")
  }

}


module.exports = RecordStore;
