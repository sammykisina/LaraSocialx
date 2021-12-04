import React from "react";
import { FiHexagon } from "react-icons/fi";
import "./Feature.css";
function Feature({ icon, heading, text }) {
  return (
    <div className="feature flex justify-start mb-8 border-indigo-50 shadow-md px-2 bg-gray-50 rounded-md py-3 md:w-3/4 lg:w-4/5">
      <div className="feature-icon mr-8 w-14 h-14">
        <FiHexagon color="orangered" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <div className="flex justify-center flex-col items-start">
          <h3 className="text-xl font-semibold leading-6 uppercase text-blue-700">
            {heading}
          </h3>
          <div className="w-20 h-1 mb-5 bg-indigo-200 ml-auto mr-auto"></div>
        </div>

        <p className="text-right text-gray-900 ">{text}</p>
      </div>
    </div>
  );
}

export default Feature;
