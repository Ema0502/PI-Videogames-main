const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getVideogames } = require('../controllers/getAllVideogames');
const { getVideogameById } = require("../controllers/getVideogameById");
const { getFind15Videogames } = require("../controllers/getFind15Videogames");
const { postVideogame } = require("../controllers/postVideogame");
const { getGenres } = require("../controllers/getGenres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);

router.get("/videogames/:id", getVideogameById);

router.get("/videogames?name=videogames", getFind15Videogames);

router.post("/videogames", postVideogame);

router.get("/genres", getGenres);

module.exports = router;
