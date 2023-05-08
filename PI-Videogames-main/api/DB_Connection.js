require('dotenv').config();
const { Secualize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const videoGameModel = require('./src/models/Videogame');
const genderModel = require('./src/models/gender');

const sequelize = new Secualize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
);

videoGameModel(sequelize);
genderModel(sequelize);

const { Videogame, gender } = sequelize.models;

Videogame.belongsToMany(gender, { through: "user_favorite" });
gender.belongsToMany(Videogame, { through: "user_favorite" });

module.exports = {
    Videogame,
    gender,
    conn: sequelize
}
