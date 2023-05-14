const Videogame = require("../models/Videogame");

const postVideogame = async (req, res) => {
  try {
    
    const { name, description, platforms, rating, genres, image, released } = req.body;// Extraemos los datos enviados en el cuerpo de la petición
    
    

    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      rating,
      image,
      released,
      genres,
    });

    return res.status(200).json({ message: 'Videogame created successfully' }, newVideogame);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  postVideogame,
};