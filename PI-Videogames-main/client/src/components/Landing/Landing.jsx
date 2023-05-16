import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.box}>Te doy la bienvenida a mi sitio, te invito a ingresar para una gran experiencia</h1>
      <button>
        <NavLink to="/home">INGRESAR</NavLink>
      </button>
    </div>
  );
};

export default Landing;