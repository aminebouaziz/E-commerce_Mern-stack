const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/usersAuth");
const profile = require("./routes/api/profile");
const products = require("./routes/api/products");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected "))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("hello !"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
