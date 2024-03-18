const express = require("express");
const cors = require("cors");
const server = express();
require('dotenv').config()

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });