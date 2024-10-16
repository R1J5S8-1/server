const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

const projectRoutes = require("./routes/projectRoutes");
const { default: mongoose } = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });     //to connect to mongodb

//checking root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());    //to accept json data

app.use("/project", projectRoutes);  //to use routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});     //to start server
