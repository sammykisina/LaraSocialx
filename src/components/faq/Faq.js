import React, { useEffect } from "react";
import { MdLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "../../constants/questions";

import AOS from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="faq" className="pb-14">
      <div className="holder faq" data-aos="fade-up">
        <div className="title mb-16 flex flex-col items-center mt-12">
          <MdLibraryBooks
            className="text-5xl mb-4 mt-16"
            style={{ color: "orangered" }}
          />
          <h2 className="text-4xl font-light leading-6 uppercase text-gray-900">
            Faq
          </h2>

          <p className="w-11/12 md:w-5/6 text-center my-2 text-base font-light">
            <span className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              repellendus numquam ipsam
            </span>
          </p>
        </div>

        <div className="questions flex flex-col gap-4">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
