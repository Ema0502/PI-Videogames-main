import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, useRoutes } from "react-router-dom";
import Form from "./components/Form/Form"


function App() {
  
  const login = () => {
    console.log('peticion')
  };

  const routes = useRoutes([{ path: "/", element: <Form login={login} /> }]);

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
        
        <Route path="/" element={<Form login={login} />} />
      

    </div>
  );
}

export default App;
git 