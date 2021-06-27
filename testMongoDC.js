const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bactran:elmore@cluster0.squez.mongodb.net/testDPW?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async (err) =>  {
  const collection = await client.db("testDPW").collection("testDPW_DB").find().toArray();
  //const name = await collection.find({});
  //const var1 = await name.toArray();
  // perform actions on the collection object
  console.log(collection[0]);
  client.close();
});