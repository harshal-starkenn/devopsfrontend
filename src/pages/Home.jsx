import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [score, setScore] = useState(0); // State for the game score
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/add-user");
  };

  const handleList = () => {
    navigate("/list-user");
  };

  const handleGame = () => {
    setScore(score + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-purple-400">
      <h1 className="text-4xl font-bold mb-4 text-white">
        This is the Homepage!
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <button
          className="border border-black p-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleAdd}
        >
          ADD USER
        </button>
        <button
          className="border border-black p-2 rounded bg-green-500 hover:bg-green-600 text-white"
          onClick={handleList}
        >
          LIST USER
        </button>
        <div className="flex flex-col items-center">
          <p className="text-lg text-white">
            Click the button to increase your score:
          </p>
          <button
            className="border border-black p-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
            onClick={handleGame}
          >
            Increase Score
          </button>
          <p className="text-lg text-white">Score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
