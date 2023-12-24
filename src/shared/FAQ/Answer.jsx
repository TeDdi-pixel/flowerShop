import React from "react";

const Answer = ({ active, answer}) => {
  return (
    <p
      className={active ? "FAQ__answer FAQ__answer_active" : "FAQ__answer"}
    >
      {answer}
    </p>
  );
};

export default Answer;
