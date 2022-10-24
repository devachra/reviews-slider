import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (people.length - 1 < number) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const onNextHanlder = () => {
    setIndex((prev) => {
      let newIndex = prev + 1;
      return checkNumber(newIndex);
    });
  };
  const onPrevHanlder = () => {
    setIndex((prev) => {
      let newIndex = prev - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name} </h4>
      <p className="job">{job} </p>
      <p className="info">{text} </p>
      <div className="button-container">
        <button className="prev-btn" onClick={onPrevHanlder}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={onNextHanlder}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
