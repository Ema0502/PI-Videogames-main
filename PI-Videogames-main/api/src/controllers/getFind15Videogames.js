require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const { Op } = require("sequelize");

const getFind15Videogames = async (req, res) => {
  try {
    const { name } = req.query;
    
    // Buscar en la base de datos
    const dbResults = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (dbResults.length === 15) {
      return res.status(200).json(dbResults);
    } else if (dbResults.length > 15) {
      const results = dbResults.slice(0, 15);
      return res.status(200).json(results);
    } else if (dbResults.length < 15) {
      const Finalresults = [];    // Si no alcanza, buscar en la API, para eso necesito una matriz
      const { data } = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
      const apiResults = data.results.slice(0, 15 - dbResults.length);      //condicion para el slice para que sean en total 15 con la db

      Finalresults.push(...apiResults, ...dbResults);   // Combinar los resultados de la API y la base de datos

      if (Finalresults.length === 0) return res.status(404).send(`No se encontraron juegos que coincidan con "${name}".`);
      return res.status(200).json(Finalresults);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getFind15Videogames
}