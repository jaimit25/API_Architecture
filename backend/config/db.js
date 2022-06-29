const moongose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await moongose.connect(process.env.MONGO_URI);

    // .cyan.underline.bold is for underline and cyan color
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


module.exports = connectDB;