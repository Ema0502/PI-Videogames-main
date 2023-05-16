import axios from "axios";
import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState(""); // Estado para almacenar el valor del campo de búsqueda
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

  // Manejador de cambio del campo de búsqueda
  const handleChange = (event) => {
    setName(event.target.value);
  };

  //búsqueda en la API
  const onSearch = async () => {
    // try {
    //   const { data } = await axios.get(`https://api.rawg.io/api/games?key=ae685cb2d21b48f9bd71da0064c1b6d5&search=${name}`);
    //   // Actualizar el estado con los resultados de la API
    //   setResults(data.results);
    // } catch (error) {
    //   // Mostrar una alerta en caso de error
    //   alert("No se ha encontrado la información solicitada");
    // }

    try {
      const { data } = await axios.get(`http://localhost:3001/search?name=${name}`);
      // Actualizar el estado con los resultados de la API
      setResults(data);
    } catch (error) {
      // Mostrar una alerta en caso de error
      alert("No se ha encontrado la información solicitada");
    }

  };
  
  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.SearchBar}
        onChange={handleChange}
        value={name}
      />

      <button onClick={onSearch} className={style.buttons}>
        Buscar
      </button>

      {/* Si hay resultados, renderizarlos*/}
      {results.length > 0 && (
        <div>
          {/* Iterar sobre los resultados y renderizar cada uno */}
          {results.map((result) => (
            <div key={result.id} className={style.box}>
              <h1>{result.name}</h1>
              <img
                src={result.background_image}
                alt=""
                className={style.image}
              />
              {/* Mostrar los géneros del videojuego separados por coma */}
              <p>
                Generos: {result.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
      {results.length === 0 && (
        <p className={style.box}>
          Puedes utilizar el buscador para buscar tu juego favorito
        </p>
      )}
    </div>
  );
};

export default SearchBar;