import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form"
import Landing from './components/Landing/Landing';

function App() {
  
  const login = () => {
    console.log('peticion')
  };

  return (
    <div className="App">
      <h1>Henry Videogames</h1>

      <Switch>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Form login={login} />} />
      </Switch>
    </div>
  );
}

export default App;
