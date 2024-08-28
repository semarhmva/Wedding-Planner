import React from 'react'
import { useState } from 'react';
export default function PlanFaq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
  
    const questions = [
      {
        question: "What is a wedding planner?",
        answer: "A wedding planner is a person or team appointed to assist in preparing, organizing, and executing a wedding to run smoothly and in line with the wishes of the bride and groom."
      },
      {
        question: "Why do I need a wedding planner?",
        answer: "A wedding planner helps you manage the complexities of your wedding day, ensuring everything runs smoothly."
      },
      {
        question: "What services are provided by a wedding planner?",
        answer: "Services include planning, coordination, budgeting, vendor management, and more."
      },
      {
        question: "How much does it cost to hire a wedding planner?",
        answer: "The cost varies depending on the planner's experience, services provided, and location."
      },
      {
        question: "When should I start looking for a wedding planner?",
        answer: "It's best to start looking as soon as possible, ideally 9-12 months before your wedding."
      },
      {
        question: "What information should I have prepared before meeting with a wedding planner?",
        answer: "You should have your budget, guest list, and a general idea of what you want for your wedding."
      }
    ];
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const handleShowAll = () => {
      setShowAll(!showAll);
    };
    return (
  <div className="faq container">
          <h1>Frequently asked questions</h1>
          <p>If you have questions that are not listed here, send them to us via <a href="mailto:email@example.com">email.</a></p>
          <div className="faq-list">
            {questions.slice(0, showAll ? questions.length : 3).map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(index)}>
                  <h3>{item.question}</h3>
                  <span>{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && <div className="faq-answer"><p>{item.answer}</p></div>}
              </div>
            ))}
          </div>
          <div className="see-all">
          <button onClick={handleShowAll} className="show-all-btn">
            {showAll ? 'See Less' : 'See All'}
          </button>
          </div>
        </div>
  
  

    )
  }