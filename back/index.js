const express = require('express');
const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectId = mongo.ObjectId;
const app = express();
const bodyParser = require('body-parser');
const url = "mongodb://localhost:27017/";

app.use(bodyParser.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  const body = req.body;
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("users").insertOne(body, (err, dbres) => {
      if(err) throw err;
      res.send(dbres.insertedId.toString());
      db.close();
    }); 
  });
});

app.get("/users/:userId", (req, res) => {
  const id = req.params.userId;
  console.log(id);
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("users").findOne({"_id": ObjectId(id)}, (err, dbres) => {
      if(err) throw err;
      res.send(JSON.stringify(dbres));
      db.close();      
    });
  });
});

app.get("/users", (req, res) => {
  const query = req.query;
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("users").find(query).toArray((err, result) => {
      if(err) throw err;
      res.send(JSON.stringify(result));
      db.close();
    });
  });
});

app.post("/projects", (req, res) => {
  const body = req.body;
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("projects").insertOne(body, (err, dbres) => {
      if(err) throw err;
      res.send(dbres.insertedId.toString());
    }); 
  });
});

app.get("/projects/:projectId", (req, res) => {
  const id = req.params.projectId;
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("projects").findOne({"_id": ObjectId(id)}, (err, dbres) => {
      if(err) throw err;
      res.send(JSON.stringify(dbres));
      db.close();      
    });
  });
});

app.get("/projects", (req, res) => {
  const query = req.query;
  client.connect(url, (err, db) => {
    const dbo = db.db("august");
    dbo.collection("projects").find(query).toArray((err, result) => {
      if(err) throw err;
      res.send(JSON.stringify(result));
      db.close();
    });
  });
});

app.listen(8080, () => {
  console.log("listening");
});
