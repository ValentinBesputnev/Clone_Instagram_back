const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./src/modules/routes/postRoutes");
const app = express();

app.use(cors());

const uri = process.env.URI;
mongoose.connect(uri);

app.use(express.json());
app.use("/", postRoutes);

app.listen(4000, () => console.log("Server running on 4000 port"));
