require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Genres } = require("../db");
const { v4: uuidv4 } = require("uuid"); // Importamos la función 'uuidv4' de la biblioteca 'uuid' para generar valores UUID

const getGenres = async (req, res) => {
  
  try {
    // Consulta los géneros desde la API
    const { data } = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genresApi = data.results.map((genre) => ({
      ...genre,
      id: uuidv4(), // Genera un nuevo valor UUID para cada registro
    }));

    // Verifica si hay géneros en la base de datos
    const dbGenres = await Genres.findAll();
    if (dbGenres.length) return res.status(200).json(dbGenres);
    
    // Si no hay géneros en la base de datos, guárdalos todos
    const newGenres = await Genres.bulkCreate(genresApi);
    return res.status(201).json(newGenres);
      
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getGenres,
}