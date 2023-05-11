require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogameById = async (req, res) => {
  try {
    const { id } = req.params;  // Obtenemos el ID del videojuego a través de los parámetros de la URL
    const { data } = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

    if (!data.id) throw new Error(`ID: ${id} Not found`); // Si la respuesta no incluye un ID, lanzamos un error para manejarlo más adelante

    const { name, description, released, image, background_image, rating, genres, platforms} = data;

    const videogame = {
      id,
      name,
      description,
      platforms,
      image: image || background_image, // Si el videojuego no tiene imagen, tendra background_image
      released,
      rating,
      genres,
    };

    return res.status(200).json(videogame);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getVideogameById,
};
