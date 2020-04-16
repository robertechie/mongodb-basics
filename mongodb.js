var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Robertechie";
MongoClient.connect(url,{ useUnifiedTopology: true }, (err, db)=>{
  if (err) throw err;
  console.log("Database created by Robertechie");
  db.close();
});