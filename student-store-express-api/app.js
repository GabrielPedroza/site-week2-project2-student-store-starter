const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.use(cors({
  origin: "http://localhost:3000"
}));

// Routes
app.use("/store", require("./routes/store"));
app.use("/products", require("./routes/products"));
app.use("/purchases", require("./routes/purchases"));

module.exports = app;
