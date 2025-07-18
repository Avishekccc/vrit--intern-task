import React from "react";
import "./Task1.css";

const TestimonialsCards = ({ testimonialsclass, hoverIndex }) => {
  return (
    <div
      className={`${testimonialsclass}  ${
        hoverIndex ? "smooth-scale-text scale-100" : ""
      } `}
    >
      <p>
        I was amazed and impressed by the course structure as it was distinctly
        different from other courses in the market. The classes were highly
        interactive and the instructor was very humble and friendly. Recordings
        of the classes were provided within a short time after each class, which
        made revision very easy and beneficial. I have recommended the same
        course to my data-enthusiast friends."
      </p>
      <p className="text-end  ml-[9.55rem] font-bold">Rajesh Dhakal</p>
      <p className="text-end ml-[7rem]">Digital Marketing Student</p>
    </div>
  );
};

export default TestimonialsCards;
