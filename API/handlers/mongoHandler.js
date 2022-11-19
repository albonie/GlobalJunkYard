typeSchema = require("../schemas/typeSchema").typeSchema;
const Types = mongoose.model("Types", typeSchema);

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
}


module.exports = {
    MongoHandler,
};