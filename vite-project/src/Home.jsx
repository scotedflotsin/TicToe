import React from "react";
import img from "./assets/unnamed.png";
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();
    const startGame = ()=>{
        navigate('/game');
    }
    return(
        <>
       <p className="text-white text-center text-[70px] mt-[70px] text-gredient font-bold ">
        Tic Toc Toe
      </p>
      <img
        src={img}
        alt=""
        className="w-[200px] h-auto rounded-[20px] m-auto mt-[80px] icon"
      />
      <button className="start flex" onClick={()=>startGame()}>Start for play</button>
    
        </>
    );
}

export default Home;