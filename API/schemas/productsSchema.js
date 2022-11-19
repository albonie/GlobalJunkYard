try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

const productsSchema = new mongoose.Schema({
  name: String,
  location: String,
  condition: String,
  type: String,
  description: String,
  desiredDate: Date, 
  date: Date
});

module.exports = {
    productsSchema,
};
