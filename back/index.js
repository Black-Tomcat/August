const express = require('express');
const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectId = mongo.ObjectId;
const app = express();
const bodyParser = require('body-parser');
const url = "mongodb://localhost:27017/";

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

function initToArray(object, keys){
  keys.forEach((item) => {
    if(!object[item]){
      object[item] = [];
    }
  });
}

app.get("/users/:userId", (req, res) => {
  const id = req.params.userId;
  if(id.length != 24){
    res.statusCode = 400;
    res.send("Nice try, give me a proper id");
  }
  else {
    client.connect(url, (err, db) => {
      const dbo = db.db("august");
      dbo.collection("users").findOne({"_id": ObjectId(id)}, (err, dbres) => {
        if(err) throw err;
        initToArray(dbres, ["mentors", "projects", "mentoring", "initiated"]); 
        res.send(JSON.stringify(dbres));
        db.close();      
      });
    });
  }
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
  if(id.length != 24){
    res.statusCode = 400;
    res.send("Nice try, give me a proper id");
  }
  else{
    client.connect(url, (err, db) => {
      const dbo = db.db("august");
      dbo.collection("projects").findOne({"_id": ObjectId(id)}, (err, dbres) => {
        if(err) throw err;
        initToArray(dbres, ["members", "progress", "tags"]);
        res.send(JSON.stringify(dbres));
        db.close();      
      });
    });
  }
});

app.post("/projects/:projectId/members", (req, res) => {
  const id = req.params.projectId;
  if(id.length != 24){
    res.statusCode = 400;
    res.send("Nice try, give me a proper id");
  }
  else{
    client.connect(url, (err, db) => {
      const dbo = db.db("august");
      dbo.collection("projects").findOne({"_id": ObjectId(id)}, (err, dbres) => {
        if(err) throw err;
        if(dbres.members){
          dbres.members.push(req.body.id);
        }
        else{
          dbres.members = [req.body.id];
        }
        dbo.collection("projects").update({"_id": ObjectId(id)}, dbres, (err, dbres) => {
          res.send(req.body.id);
          db.close(); 
        });
      });
    });
  }
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

app.listen(3000, () => {
  console.log("listening");
});
