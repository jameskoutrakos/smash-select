const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const characterRoutes = require("./routes/characters");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", characterRoutes);

app.listen(PORT, () => {
  console.log("The server is now online on port " + PORT);
});
