var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("Robertechie");
  var old= {movie: "The Banker" };
  var newvalues = { $set: {movie: "Robertechie DClown", year: "2020", rating:10 } };
  dbo.collection("myMovies").updateOne(old, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Number of movie collection updated: " + res.result.nModified);
    db.close();
  });
});
//update collection
(function(){
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
            if (err) throw err;
            var dbo = db.db("Robertechie");
            //get items
            dbo.collection("myMovies").find().toArray(function(err, res) {
                if (err) throw err;
                console.log(res);
                db.close();
              })
          });
})()