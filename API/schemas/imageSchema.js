try {
    mongoose = require("mongoose");
  } catch (e) {
    console.log(e);
  }
  
  const imageSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
      },
    file: {
        data: Buffer,
        contentType: String,
    }
  });
  
  module.exports = {
      imageSchema,
  };
  