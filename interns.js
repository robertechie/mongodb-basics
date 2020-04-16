var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("Robertechie");
  var myobj =[{movie: "The Banker", year: "2020", rating: 8},  {movie: "Bad Boys", year: "2020", rating: 7}, {movie: "The Hunt", year: "2020", rating: 7}, {movie: "Bloodshot", year: "2020", rating: 7.5}, {movie: "First Cow", year: "2020", rating: 6.5} ]
  //make an insertion
  dbo.collection("myMovies").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});