require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Genres } = require("../db");

const getGenres = async (req, res) => {
  
  try {
    // Consulta los géneros desde la API
    const { data } = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genresApi = data.results;

    // Verifica si hay géneros en la base de datos
    const dbGenres = await Genres.findAll();
    if (dbGenres.length) return res.status(200).json(dbGenres);
    
    // Si no hay géneros en la base de datos, guárdalos todos
    const newGenres = await Genres.bulkCreate(genresApi);
    return res.status(200).json(newGenres);
      
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getGenres,
}