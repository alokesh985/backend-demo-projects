const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(router);

const PORT = 8080;

app.listen(8080, () => console.log("Server listening on port 8080"));
