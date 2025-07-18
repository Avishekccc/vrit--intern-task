import React from "react";
import avivideo from "../../assets/avishek_testimonial.mp4";

const TestimonialsVideo = ({ testimonialsclass, hoverIndex }) => {
  return (
    <div
      className={`${testimonialsclass} ${hoverIndex ? "smooth-scale-video" : " "} `}
    >
      <video
        src={avivideo}
        className=" h-full w-full rounded-xl object-cover"
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default TestimonialsVideo;
