require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
  try {
    const { data } = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
    
    let allResults = [];  // Inicializar una matriz para almacenar los resultados

    for (let i = 0; i < 5; i++) {
      const response = await axios(data.next); // Hacer una petición HTTP a la siguiente página
      allResults = [...allResults, ...response.data.results]; // Agregar los resultados a la matriz
      data.next = response.data.next; // Actualizar el enlace a la siguiente página
    }
    return res.status(200).json(allResults);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

module.exports = {
  getVideogames,
};