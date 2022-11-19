const express = require("express");
const app = express();
const bodyParser = require('body-parser')
require("dotenv").config();
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

const jsonParser = bodyParser.json();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const MongoHandler = require("./handlers/mongoHandler").MongoHandler;

app.post("/api/types", jsonParser, function (req, res) {
    MongoHandler.addTypes(req.body.name, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
  });

app.get("/api/types", function (req, res) {
    MongoHandler.findAllTypes((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});