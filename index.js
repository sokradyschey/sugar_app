const express = require('express');
const sequelize = require("./app/model/dbconfig");
const Glucose = require('./app/model/sugar');
const port = 3000

// automatically creating table on startup
sequelize.sync({ force: true }).then(async () => {
    console.log("db is ready...");
  });

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})