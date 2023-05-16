import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
