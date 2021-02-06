const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require('path');
const chalk = require('chalk');

require('dotenv').config();

const app = express();

// app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require("./sequelize");
db.sequelize.sync({ force: true }); // Set force to false if you'd like to use existing tables, otherwise keep it true as we keep on finalizing our models

// Auto generate routes from routes directory
const routesDir = path.resolve(__dirname, "routes");
const basename = path.basename(__filename);

fs
    .readdirSync(routesDir)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        require(path.join(routesDir, file))(app);
    });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(
        `${chalk.green('Server is running on port:')} ${PORT}.`
    );
});