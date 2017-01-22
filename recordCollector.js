var RecordCollector = function(name, balance){
  this.name = name;
  this.records = [];
  this.balance = balance;
}


RecordCollector.prototype={
  buyRecord(record){
    if( this.balance > record.price){
      this.records.push(record);
      this.balance -=record.price;
    }
  },
  sellRecord(record){
    var indexOfItem = this.records.indexOf(record);
    this.records.splice(indexOfItem,1);
    this.balance +=record.price;
  }

}



module.exports = RecordCollector;
