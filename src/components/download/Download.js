import React, { useEffect } from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import "./Download.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Download() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="download" className="text-center py-28 text-white">
      <div className="holder download" data-aos="fade-up">
        <h2 className="text-base sm:text-xl my-2 download-title">
          <span className="text-2xl sm:text-3xl text-white ">
            LaraSocial<span style={{ color: "orangered" }}>x</span>
          </span>{" "}
          <span className="uppercase font-thin">Messenger Download</span>
        </h2>
        <div className="w-20 h-1 mb-5 bg-white ml-auto mr-auto"></div>
        <p className="text-sm sm:text-base">
          Our apps are available for download on all stores
        </p>

        <IconContext.Provider value={{ size: "20" }}>
          <div className="download-icons flex justify-center items-center gap-4">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>

            <div className="download-icon ">
              <GrAndroid /> <p>Android</p>
            </div>

            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default Download;
