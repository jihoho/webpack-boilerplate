"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize = new Sequelize({
    host: config.host,
    username: config.username,
    password: config.password,
    port: config.port,
    database: config.database,
    dialect: config.dialect,
});

const connectionTest = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

const init = async () => {
    await connectionTest();
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    await sequelize.drop();
    await sequelize.sync();
};

init();
module.exports = db;
