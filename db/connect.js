const mongoose = require("mongoose");
// const { options } = require("../routes/product");
uri =
  "mongodb+srv://sept1st2c-2:JEgoQ49RNJRtG0UX@cluster0.3zirbua.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
