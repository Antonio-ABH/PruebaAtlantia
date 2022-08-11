const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

//settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev")); //Show data recived
app.use(express.urlencoded({ extended: false })); //Allow to recive data from forms
app.use(express.json()); //Allow to work with json files
app.use(cors()); //Allow to Frontend get data

//routes
app.use("/api/products", require("./routes/Products"));
app.use("/api/prices", require("./routes/Prices"));
app.use("/api/presence", require("./routes/Presence"));

app.listen(app.get("port"), () => {
  console.log("escuchando en el puerto");
});
