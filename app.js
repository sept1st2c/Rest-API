const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require("../rest api/db/connect");

const products_routes = require("../rest api/routes/product");

app.get("/", (req, res) => {
  res.send("hiiiiiiiiiii");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
