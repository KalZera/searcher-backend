const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// add enviroment variables
dotenv.config();
// iniciando app
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);
