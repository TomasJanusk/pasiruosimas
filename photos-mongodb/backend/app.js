const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const photoRouter = require("./routes/photoRoutes");

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/photos", photoRouter);


module.exports = app;