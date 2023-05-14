import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Bienvenido a esta pagina, haga click en el boton para acceder</h1>
      <button>
        <NavLink to="/login">Login</NavLink>
      </button>
    </div>
  )
};

export default Landing;