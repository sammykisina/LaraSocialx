import React from "react";
import "./Quenstion.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

function Question({ title, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question border border-gray-900 rounded mx-2 px-4 py-2">
      <div className="question-title flex justify-between items-center">
        <h4 className="font-semibold uppercase leading-6 sm:text-lg">
          {title}
        </h4>
        <button
          onClick={handleClick}
          className="question-icon p-1 rounded-full bg-gray-200 cursor-pointer"
          style={{ color: "orangered" }}
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="text-sm mt-2 text-gray-700">{answer}</p>}
      </div>
    </div>
  );
}

export default Question;
