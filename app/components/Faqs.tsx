/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function FAQ() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const { data } = await axios(`/api/faq`);
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <div className="faq-container" id="faqs">
      <h2 className="faq-heading ">Frequently asked questions</h2>
      <hr className="border-line" />
      <section className="faq">
        {questions.map((item: any) => (
          <Question question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
}

const Question = (props: any) => {
  const [isActive, setActive] = useState<boolean>(false);
  const handleClick = (id: any) => {
    setActive(!isActive);
  };
  return (
    <div className="question-wrapper">
      <div className="question" id={props.id}>
        <button className="faq-svg-button " onClick={() => handleClick(props.id)}>
          <svg className={isActive ? 'faq-svg active' : 'faq-svg'} viewBox="0 0 320 512" width="100">
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
        <h3>{props.question}</h3>
      </div>
      <div className={isActive ? 'answer active' : 'answer'}>{props.answer}</div>
    </div>
  );
};
