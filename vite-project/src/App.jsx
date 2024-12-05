import {React} from "react";
import { Router as router, Routes, Route, useNavigate, } from "react-router-dom";
import Game from "./game";
import Home from "./Home";

const App = () => {
 const navigate = useNavigate();

  const open_gane = ()=>{
    navigate("/game");
  }
  return (
    <>
  
    <router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </router>
    
    
    </>

  );
};

export default App;
