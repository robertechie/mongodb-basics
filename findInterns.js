var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function getone(){
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
        if (err) throw err;
        var dbo = db.db("Robertechie");
        var myobj ={}
        //make an insertion
        dbo.collection("myMovies").findOne(myobj,function(err, res) {
          if (err) throw err;
          console.log(res);
         // db.close();
        }); 
      });
}



//get rating of 7
function getrating(){
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
        if (err) throw err;
        var dbo = db.db("Robertechie");
        //make an insertion
        dbo.collection("myMovies").find({ rating: 7 }).toArray(function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
          });
      });
}
//funtion to return only movie title
function getonlymovietitle(){
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=> {
        if (err) throw err;
        var dbo = db.db("Robertechie");
        //make an insertion
        dbo.collection("myMovies").find({},{ projection: { _id: 0, movie: 1 } }).toArray(function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
          })
      });
}
//getone();
//getrating();
getonlymovietitle();
