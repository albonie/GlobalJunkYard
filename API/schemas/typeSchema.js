try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

const typeSchema = new mongoose.Schema({
  name: String,
});

module.exports = {
  typeSchema,
};
