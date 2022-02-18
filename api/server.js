const express = require("express");
const morgan = require("morgan");

const rutas = require("./routes");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", rutas);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
});
