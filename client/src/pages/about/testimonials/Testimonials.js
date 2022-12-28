import React, { useState } from "react";
import "./Testimonials.css";
import { DataTestimonials } from "./DataTestimonials";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = DataTestimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(DataTestimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= DataTestimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <h1 className="testimonials__head">Ban Lãnh Đạo</h1>
        <div className="testimonial">
          <div className="testimonial__info">
            <h1 className="testimonial__job">{`${job}`}</h1>
            <h2 className="testimonial__quote">{`${quote}`}</h2>
            <h1>{`${name}`}</h1>
          </div>
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
        </div>
      </div>
      <div className="testimonials__btn-container">
        <button className="testimonials__btn" onClick={prevTestimonialHandler}>
          <IoIosArrowDropleftCircle />
        </button>
        <button className="testimonials__btn" onClick={nextTestimonialHandler}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
