import { useState } from "react";
import { useNavigate } from "react-router-dom"
import validation from "../validation/validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {   //evita que se recargue la pagina al hacer un click en el boton
    event.preventDefault();
    login(userData);
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ color: "blue" }}>
        Email:{" "}
      </label>
      <input type="email" name="email" value={userData.email} onChange={handleChange} />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <hr />

      <label htmlFor="password" style={{ color: "blue" }}>
        Password:{" "}
      </label>
      <input type="password" name="password" value={userData.password} onChange={handleChange} />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
