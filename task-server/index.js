/** @format */

const express = require("express");
require("dotenv").config();
const {MongoClient, ServerApiVersion, ObjectId} = require("mongodb");

const cors = require("cors");

// create app
const app = express();
const port = process.env.PORT || 4000;

// middle ware
app.use(cors());
app.use(express.json());


const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r486pno.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// start work on verify  token

async function run() {
  try {
    // TODO:DELETE BEFORE DEPLOY AWAIT CLIENT
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const usersCollections = client.db("taskDB").collection("users");
    const createTaskCollections = client.db("taskDB").collection("createTask");

    // API ROUTES

    app.get("/", (req, res) => {
      res.send("tas management");
    });

    // collection users post
    app.post("/api/v1/users/:email", async (req, res) => {
      const email = req.params.email;

      const query = {email: email};
      const usersInfo = req.body;
      console.log(usersInfo);
       console.log(query)

      const isExist = await usersCollections.findOne(query);

      if (isExist) {
        return res.send({message: isExist});
      }

      const result = await usersCollections.insertOne({
        ...usersInfo,
        timeStamp: Date.now(),
      });

      res.send(result);
    });


    // create task 



    app.post('/api/v1/createTask',async(req,res)=>{


        const task = req.body;

        console.log(task)

        const result = await createTaskCollections.insertOne(task)

        res.send(result)



    })


    // manage task


    app.get('/api/v1/createTask',async(req,res)=>{


        const result  = await createTaskCollections.find().toArray();


        res.send(result)
    })

// update task 


app.put('/api/v1/updateTask/:id',async(req,res)=>{

   const  id = req.params.id;

   const filter= {_id: new ObjectId(id)}
   const data = req.body;
   const updateDoc = {
    $set: {
 
       ...data,
       
    },
  };
//  console.log(id)
   const result = await createTaskCollections.updateOne(filter,updateDoc)
//  console.log(result)
   res.send(result)

})


// deleted task


app.delete('/api/v1/delete/:id',async(req,res)=>{

  const  id = req.params.id; 
   
  const filter= {_id: new ObjectId(id)}; 

  const result = await createTaskCollections.deleteOne(filter);
 console.log(result)
   res.send(result)

})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ping: 1});
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
