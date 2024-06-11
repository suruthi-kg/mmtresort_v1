

const express = require('express');
const mongoose =require('mongoose')
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');


const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
// const uri = "mongodb+srv://suruthi:404538@cluster0.7moq8kp.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://1212789:1212789@cluster0.fp5qkg3.mongodb.net/?retryWrites=true&w=majority"
// const uri = `mongodb+srv://${username}:${password}@cluster0.fp5qkg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const uri = "mongodb+srv://ragunath:21022002@cluster0.fp5qkg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {  serverApi: ServerApiVersion.v1 });

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
}

connectDB();


app.post('/insertData',  (req, res) => {
 const data = req.body; // Access data from request body
 console.log(data,"data");

 
async function run() {
   try {
  await client.connect();
  const db = client.db('mmtresort');
  const collection = db.collection('booking_detail');
  const ggg = await collection.insertOne(data);
  res.send({ message: 'Data inserted successfully2!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error inserting data' });
  } finally {
    await client.close();
  }
}
run().catch(console.error);
});




app.get('/api/data', (req, res) => {
  const data1 = { message: 'Hello from Node.js!' }
  res.json(data1);
});


app.listen(port, () => console.log(`Server listening on port ${port}`));














