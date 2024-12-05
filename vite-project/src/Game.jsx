import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import audio from "../src/assets/move_effect.wav";
import timerAudio from "../src/assets/timer.mp3";

const Game = () => {
  const [progress, setProgress] = useState(0);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(true); // true for X false for O
  const isInitialMount = useRef(true);
  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");
  const [col3, setCol3] = useState("");
  const [col4, setCol4] = useState("");
  const [col5, setCol5] = useState("");
  const [col6, setCol6] = useState("");
  const [col7, setCol7] = useState("");
  const [col8, setCol8] = useState("");
  const [col9, setCol9] = useState("");

  const stateChanger = (id) => {
    //getting div id and position
    if (id == 1) {
      if (col1) {
      } else {
        turnSound();
        turn ? setCol1("X") : setCol1("O");
        setTurn(!turn);
      }
    } else if (id == 2) {
      if (col2) {
      } else {
        turnSound();
        turn ? setCol2("X") : setCol2("O");
        setTurn(!turn);
      }
    } else if (id == 3) {
      if (col3) {
      } else {
        turnSound();
        turn ? setCol3("X") : setCol3("O");
        setTurn(!turn);
      }
    } else if (id == 4) {
      if (col4) {
      } else {
        turnSound();
        turn ? setCol4("X") : setCol4("O");
        setTurn(!turn);
      }
    } else if (id == 5) {
      if (col5) {
      } else {
        turnSound();
        turn ? setCol5("X") : setCol5("O");
        setTurn(!turn);
      }
    } else if (id == 6) {
      if (col6) {
      } else {
        turnSound();
        turn ? setCol6("X") : setCol6("O");
        setTurn(!turn);
      }
    } else if (id == 7) {
      if (col7) {
      } else {
        turnSound();
        turn ? setCol7("X") : setCol7("O");
        setTurn(!turn);
      }
    } else if (id == 8) {
      if (col8) {
      } else {
        turnSound();
        turn ? setCol8("X") : setCol8("O");
        setTurn(!turn);
      }
    } else if (id == 9) {
      if (col9) {
      } else {
        turnSound();
        turn ? setCol9("X") : setCol9("O");
        setTurn(!turn);
      }
    }
    console.log("Running... On Event...!");
    // matchJudge();
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("Checking win conditions...");
      console.log(
        "Board state:",
        col1,
        col2,
        col3,
        col4,
        col5,
        col6,
        col7,
        col8,
        col9
      );

      const winConditions = [
        [col1, col2, col3], // Top row
        [col4, col5, col6], // Middle row
        [col7, col8, col9], // Bottom row
        [col1, col4, col7], // Left column
        [col2, col5, col8], // Middle column
        [col3, col6, col9], // Right column
        [col1, col5, col9], // Diagonal (top-left to bottom-right)
        [col3, col5, col7], // Diagonal (top-right to bottom-left)
      ];

      for (let condition of winConditions) {
        if (
          condition[0] &&
          condition[0] === condition[1] &&
          condition[1] === condition[2]
        ) {
          console.log("Win detected for:", condition[0]);
          setWinner(condition[0]);
          return; // Stop further checks
        }
      }

      console.log("No win detected.");
    }
  }, [col1, col2, col3, col4, col5, col6, col7, col8, col9]);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setTurn((prevTurn) => !prevTurn); // Toggle turn
          setProgress(0); // Reset progress to 0
          return 0; // Return 0 to reset immediately
        }
        return prevProgress + 5; // Increment progress by 1
      });
    }, 1000); // Runs every second

    // Cleanup function to clear the interval
    return () => clearInterval(id);
  }, [turn]); // Empty dependency array ensures this runs only once on mount

  const turnSound = () => {
    const audio2 = new Audio(audio);
    audio2.play();
  };
  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="relative w-[100vw] h-[100vh]">
        <div className="flex flex-col">
          <p className="text-white text-center text-[70px] mt-[30px] text-gredient font-bold ">
            Tic Toc Toe
          </p>
          <div className="flex items-center flex-col gap-[100px]">
            <div className="w-[120px] flex mt-[40px] responsive">
              <CircularProgressbar
                value={progress}
                text={`${turn ? "X" : "0"}`}
                styles={buildStyles({
                  pathColor: `#1005ad`,
                  textColor: "#e40d5f",
                  trailColor: `rgba(49, 0, 18, 0)`,
                  backgroundColor: "#0ca3df",
                  textSize: "30px",
                })}
              />
            </div>
            <div className="game-board">
              <div className="child1" onClick={() => stateChanger(1)}>
                {col1}
              </div>
              <div className="child2" onClick={() => stateChanger(2)}>
                {col2}
              </div>
              <div className="child3" onClick={() => stateChanger(3)}>
                {col3}
              </div>
              <div className="chil4" onClick={() => stateChanger(4)}>
                {col4}
              </div>
              <div className="child5" onClick={() => stateChanger(5)}>
                {col5}
              </div>
              <div className="child6" onClick={() => stateChanger(6)}>
                {col6}
              </div>
              <div className="child7" onClick={() => stateChanger(7)}>
                {col7}
              </div>
              <div className="child8" onClick={() => stateChanger(8)}>
                {col8}
              </div>
              <div className="child9" onClick={() => stateChanger(9)}>
                {col9}
              </div>
            </div>
          </div>

          <button
            onClick={() => refresh()}
            className="draw-button bg-blue-700 mt-[100px] w-[200px] m-auto p-[10px] rounded-[10px]"
          >
            Start New Game
          </button>
        </div>

        <div
          className={`${
            winner ? "visible" : "hidden"
          } absolute w-[100vw] h-[100vh] top-0  bg-[rgba(85,122,170,0.29)] flex justify-center items-center`}
        >
          <div className="p-[10px] dailog z-[10] w-[300px] h-[200px] bg-[#000000] rounded-lg shadow-lg flex justify-center items-center flex-col">
            <p className="text-white text-center text-[70px] mt-[30px] text-gredient font-bold ">
              {`
                ${winner} WIN
              `}
            </p>
            <button
              onClick={() => refresh()}
              className="dailoghover mb-[30px] bg-[#e21b4dab] text-white px-4 py-2 rounded-lg"
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
