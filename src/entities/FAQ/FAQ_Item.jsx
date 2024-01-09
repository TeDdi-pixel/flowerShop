import React, { useState } from "react";
import Answer from "../../shared/FAQ/Answer";
import Question from "../../shared/FAQ/Question";
import { IoIosArrowDown } from "react-icons/io";

const FAQItem = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const toggleAnswer = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="FAQ__text-wrapper" onClick={toggleAnswer}>
      <div className="FAQ__question-wrapper">
        <Question question={question} />
        <IoIosArrowDown
          className={`"FAQ__question-arrow" ${active ? "FAQ__question-arrow_active" : ""}`}
        />
      </div>
      <Answer answer={answer} active={active} />
    </div>
  );
};

export default FAQItem;
