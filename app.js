const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const { PORT, URI_MONGODB } = require("./config.js");


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: { authSource:'admin' }
}

mongoose.connect(URI_MONGODB, options)

//result = Products.find({}).exec().then((item) => {
  //console.log(item)
//})
//
const server = express();

// Plugins
server.use(cors());
server.use(bodyParser.json());

// Routes
server.use("/", require("./routes/status"));
server.use("/api", require("./routes/products"));


server.listen(PORT, () => {
  console.info(`Server started on ${PORT}`);
});



//server.use(express.static("build"));
//server.get("*", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "build", "index.html"));
//});
