require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
//DB Related
const connectDB = require("./db/connect");
//Routes Calling
const productsRouter = require("./routes/productRoute");
//Async handlers
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//Middleware (Didn't use for this project)
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products</a>");
});

app.use("/api/v1/products", productsRouter);

//Products Routes
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
