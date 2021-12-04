import React, { useEffect } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import { featuresData } from "../../constants/featuresData";
import Feature from "./Feature";

import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="holder features">
        <div
          className="title mb-16 flex flex-col items-center mt-12"
          data-aos="fade-down"
        >
          <BsBookmarkFill
            className="text-5xl mb-4 mt-16"
            style={{ color: "orangered" }}
          />
          <h2 className="text-4xl font-light leading-6 uppercase text-gray-900">
            Core Features
          </h2>

          <p className="w-11/12 md:w-5/6 text-center my-2 text-base font-light">
            <span className="text-xl text-gray-900">
              LaraSocial<span style={{ color: "orangered" }}>x</span>
            </span>{" "}
            <span className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              repellendus numquam ipsam, reprehenderit rerum?
            </span>
          </p>
        </div>

        <div className="features-content flex justify-center flex-col lg:flex-row ">
          <div
            className="features-left flex justify-center lg:block"
            data-aos="fade-right"
          >
            <img
              className="w-2/3 md:w-1/2 lg:w-11/12"
              src={phoneFeatures}
              alt="phone-features"
            />
          </div>
          <div
            className="features-right flex-1 flex justify-center flex-col items-center"
            data-aos="fade-left"
          >
            {featuresData.map((featureData) => (
              <Feature
                key={featureData.id}
                heading={featureData.heading}
                icon={featureData.icon}
                text={featureData.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
