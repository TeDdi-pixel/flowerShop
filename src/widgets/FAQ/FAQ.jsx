import React from "react";
import FAQItem from "../../entities/FAQ/FAQ_Item";
import useData from "../../hooks/useData";

const FAQ = () => {
  const { data } = useData("FAQ");
  return (
    <div className="FAQ">
      <h2 className="FAQ__title">Frequently Asking Questions</h2>
      <div className="FAQ__wrapper">
        {data.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
