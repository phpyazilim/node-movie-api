 
const mongoose = require('mongoose');
 
module.exports = () => {

  mongoose.connect('mongodb://user1:123456a@cluster0-shard-00-00-tpsjb.mongodb.net:27017,cluster0-shard-00-01-tpsjb.mongodb.net:27017,cluster0-shard-00-02-tpsjb.mongodb.net:27017/movie-api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
  mongoose.connection.on('open',()=>{
    console.log("bağlantı sağlandı");
  });
  mongoose.connection.on('error',()=>{
    console.log("bağlantı hatası",error);
  });

  mongoose.Promise = global.Promise;
 
};