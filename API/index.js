const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

imageSchema = require("./schemas/imageSchema").imageSchema;
const Image = mongoose.model("Image", imageSchema);

const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.post("/api/products/add", jsonParser, function (req, res) {
    MongoHandler.addProducts(req.body, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});

app.post("/api/products/list", jsonParser, function (req, res) {
    MongoHandler.findProducts(req.body, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});

app.post("/api/products/list/:type", jsonParser, function (req, res) {
    MongoHandler.findProductsWithType(req.params.type, req.body, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});

app.post("/api/products/listwithdate", jsonParser, function (req, res) {
    MongoHandler.findProductsDesiredDate(req.body, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});

app.post("/api/products/listwithdate/:type", jsonParser, function (req, res) {
    MongoHandler.findProductsDesiredDateWithType(req.params.type, req.body, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});
app.get("/api/product/:id",(req,res)=>{
  MongoHandler.findProductById(req.params.id,(err, data) => {
    if (err) return next(err);
    res.json(data);
  })

})


app.post("/api/image/add", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      res.json({
        success: false,
        message: "You must provide at least 1 file"
      });
    } else {
      let imageUploadObject = {
        file: {
          data: req.file.buffer,
          contentType: req.file.mimetype
        },
        productId: req.body.productId
      };
      const image = new Image(imageUploadObject);
      const uploadProcess = await image.save();
      res.status(200).send(uploadProcess);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/image/:id", (req, res) => {
  MongoHandler.findImages(req.params.id, (err, data) => {
    if (err) return next(err);
    res.json(data);
  })
})

app.get("/api/count/products", (req, res) => {
  MongoHandler.countProducts((err, data) => {
    if (err) return next(err);
    res.json(data);
  })
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
