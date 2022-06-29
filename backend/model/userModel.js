const moongose = require("mongoose");

const userSchema = new moongose.Schema(
  {
    // name : String
    // or
    name: {
      type: String,
      required: [true, "please add Name. it is required"],
      _id: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = moongose.model('users', userSchema); // users is the name of the collection in mongoDB