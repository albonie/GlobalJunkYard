typeSchema = require("../schemas/typeSchema").typeSchema;
const Types = mongoose.model("Types", typeSchema);

productsSchema = require("../schemas/productsSchema").productsSchema;
const Products = mongoose.model("Products", productsSchema);

class MongoHandler {
  static addTypes(name, done) {
    let newTypes = new Types({
      name: name,
    });
    newTypes.save(function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
  }

  static findAllTypes(done) {
    Types.find({}, function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
  }

  static addProducts(productObject, done) {
    let product = {
      name: productObject.name,
      location: productObject.location,
      condition: productObject.condition,
      type: productObject.type,
      description: productObject.description,
      date: new Date(Date.now()).toISOString()
    };

    if(productObject.desiredDate != null) {
        product.desiredDate = new Date(productObject.desiredDate).toISOString();
    } 

    let newProduct = new Products(product);

    newProduct.save(function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
  }

  static findProducts(searchParams, done) {
    Products.find()
      .sort({ date: -1 })
      .skip(searchParams.skip)
      .limit(searchParams.limit)
      .exec(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
      });
  }

  static findProductsWithType(searchType, searchParams, done) {
    Products.find({ type: searchType })
      .sort({ date: -1 })
      .skip(searchParams.skip)
      .limit(searchParams.limit)
      .exec(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
      });
  }

  static findProductsDesiredDate(searchParams, done) {
    Products.find({desiredDate: { $exists: true, $ne: null }})
      .sort({ desiredDate: 1 })
      .skip(searchParams.skip)
      .limit(searchParams.limit)
      .exec(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
      });
  }

  static findProductsDesiredDateWithType(searchType, searchParams, done) {
    Products.find({type: searchType, desiredDate: { $exists: true, $ne: null }})
      .sort({ desiredDate: 1 })
      .skip(searchParams.skip)
      .limit(searchParams.limit)
      .exec(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
      });
  }
}

module.exports = {
  MongoHandler,
};
