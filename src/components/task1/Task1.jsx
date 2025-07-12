import React, { useState } from "react";
import "./Task1.css";
import { FaArrowRight } from "react-icons/fa";
import { images } from "./images";
import AmaizingBox from "./AmaizingBox";
import TestimonialsCards from "./TestimonialsCards.jsx";
import TestimonialsVideo from "./TestimonialsVideo.jsx";

const Task1 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <main className="h-[100dvh] flex justify-center items-center">
      {/* content here */}
      <section className="group lg:h-1/2 lg:w-1/2 flex justify-center items-center p-6  relative   ">
        {/* centered text */}
        <section className=" md:max-w-[600px] flex flex-col gap-2 md:gap-4 items-center z-10  ">
          <h3 className=" md:text-2xl  font-semibold text-[#414141]  ">
            Hear How They Level Up Their Game!
          </h3>
          <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-[#2B2B2B]">
            Skill <span className="text-[#1DA077]"> Masters</span> Unite! 🤝
          </h1>
          <button className="text-center  text-[#2B2B2B] text-sm md:text-xl xl:text-lg flex font-semibold cursor-pointer hover:gap-1 transition ease-in-out">
            View all Testimonials
            <span className="text-sm md:text-xl lg:text-sm pt-1 md:pt-[7px] pl-2 lg:pl-3">
              <FaArrowRight />
            </span>
          </button>
        </section>

        {/* student image and gif */}

        {images.map((img, index) => {
          return (
            <div
              key={index}
              className={img.wrapperClass}
              onMouseEnter={() => {
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverIndex(null);
              }}
            >
              <img src={img.src} alt={img.alt} className={img.imgClass} />

              {img.testimonialCard && hoverIndex === index && (
                <TestimonialsCards
                  testimonialsclass={img.testimonialCard.testimonialsclass}
                  hoverIndex={hoverIndex === index}
                ></TestimonialsCards>
              )}

              {img.testimonialVideo && hoverIndex === index && (
                <TestimonialsVideo
                  testimonialsclass={img.testimonialVideo.testimonialsclass}
                  hoverIndex={hoverIndex === index}
                ></TestimonialsVideo>
              )}

              {img.amazingBox && (
                <AmaizingBox amzClass={img.amazingBox.amzClass}></AmaizingBox>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Task1;
