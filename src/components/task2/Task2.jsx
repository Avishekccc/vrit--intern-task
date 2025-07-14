import React from "react";
import boyImage1 from "../../assets/boyImage1.png";
import boyImage2 from "../../assets/boyImage2.png";
import girlImage3 from "../../assets/girlImage3.png";
import boyImage4 from "../../assets/boyimage4.png";
import innerImage1 from "../../assets/div1innerimage.png";
import innerImage2 from "../../assets/div2innerimage.png";
import shadow from "../../assets/shadowinnerdiv1.png";
import wowImage1 from "../../assets/wow.svg";
import wowImage2 from "../../assets/wow2.svg";
// import redinnerbg from '../../assets/1innerbg.png'
import "./Task2.css";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Task2 = () => {
  return (
    <main className="min-h-screen  max-w-[90%] mx-auto my-8 space-y-8 py-5 2xl:p-8  ">
      {/* heading */}
      <section className="space-y-2 md:space-y-4">
        <h2 className="text-[#414141] text-xl md:text-2xl font-semibold">
          Your SkillShikshya Journey
        </h2>
        <h1 className="text-[#1DA077] text-2xl md:text-3xl font-bold">
          Step <span className="text-[#2B2B2B]">In.</span> Skill{" "}
          <span className="text-[#2B2B2B]">Up.</span> Stand{" "}
          <span className="text-[#2B2B2B]">Out.</span>
          🚀
        </h1>
      </section>
      {/* grid */}
      <section className=" grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 ">
        {/* grid-1 wrapper */}
        <div className="lg:relative group">
          {/* lower layer card */}
          <div
            className="w-full h-full bg-[url('/1innerbg.png')] bg-cover hidden lg:block lg:absolute  text-[#FAFAFA] pl-[13rem] pr-[2rem] 2xl:pl-[22rem] lg:py-5 xl:py-7 2xl:py-12  rounded-4xl opacity-0 group-hover:opacity-100 duration-1000 ease-in-out"
            dir="rtl"
          >
            <h1 className="text-lg xl:text-xl 2xl:text-2xl font-bold  text-end">
              Clarity unlocked—stickers, sips, and skills all in one go!
            </h1>

            <div className=" absolute top-[8rem] left-[17rem] xl:top-40 xl:left-75 2xl:top-[11.25rem] 2xl:left-[27.5rem]">
              <img src={wowImage1} alt="wow image" />
            </div>
            <div className=" absolute top-0 -left-0 xl:top-10 xl:left-12 2xl:top-10 2xl:left-0 lg:left-20 ">
              <img src={wowImage2} alt="wow image" />
            </div>

            <div className=" h-[12rem] w-[14rem] xl:h-[14rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[20rem] absolute top-3 -left-9 xl:top-11 xl:-left-8 2xl:top-8 2xl:-left-10  ">
              <img
                src={innerImage1}
                alt="Boy image"
                className="h-full w-full object-cover absolute top-10 left-16 z-10"
              />
              <img
                src={shadow}
                alt="shadow"
                className="h-full w-full object-cover absolute top-10 left-18"
              />
            </div>
            {/* Arrow buttons */}
            <button className="text-[#1F2937] text-xl lg:p-5 xl:p-6 2xl:p-7  rounded-full inline-block absolute lg:top-[6rem] lg:left-[24.5rem] xl:top-32 xl:left-[31.3rem] 2xl:top-[9rem] 2xl:-left-2 shadow-xl shadow-gray-800 bg-amber-50">
              <FaArrowRightLong />
            </button>
            <button className="text-[#1F2937] text-xl lg:p-5 xl:p-6 2xl:p-7  rounded-full inline-block absolute lg:top-[6rem] lg:-left-3 xl:top-32 xl:-left-2 2xl:top-[9rem] 2xl:left-[35.5rem]  shadow-xl shadow-gray-800 bg-amber-50">
              <FaArrowLeftLong />
            </button>
          </div>

          {/* upper layer card */}
          <div
            className="w-full h-full 2xl:absolute bg-[#F45B5B] text-[#FAFAFA]  pr-6 py-8 space-y-6 md:pr-8 md:py-12 lg:py-6 xl:py-9 2xl:py-12 md:space-y-12 lg:space-y-5 xl:space-y-7  2xl:space-y-12 rounded-4xl card-Bounce transform group-hover:-translate-x-[900px] group-hover:opacity-0 duration-1000 ease-in-out z-20"
            dir="rtl"
          >
            {/* illustration */}
            <div className="h-[15rem] w-auto absolute top-9 -left-7 md:h-[26rem] md:top-12 md:-left-12 lg:h-[16rem] lg:top-7 lg:-left-7 xl:h-[22rem] xl:top-5 xl:-left-17 2xl:h-[25rem] 2xl:top-5 2xl:-left-[3.75rem] image-Bounce ">
              <img
                src={boyImage1}
                alt="Boy image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl md:text-4xl  lg:text-2xl font-bold">
                Start with Clarity
              </h1>
              <h2 className="text-sm md:text-2xl lg:text-xl 2xl:text-2xl ">
                .Step into a better learning path
              </h2>
            </div>

            <p className="text-xs ml-[9rem] md:text-2xl lg:text-sm xl:text-lg 2xl:text-lg md:pl-[9rem] lg:ml-[6rem] lg:pl-[3rem] xl:ml-[8rem] 2xl:ml-[0rem]  2xl:pl-[2rem]  inline-block ">
              Overwhelmed by too many learning options? SkillShikshya provides a
              clear, curated roadmap from the start. Whether you're a beginner
              or upskilling, we have a path tailored to your growth
            </p>
          </div>
        </div>

        {/* grid-2 wrapper */}
        <div className="lg:relative group">
          {/* lower layer card */}
          <div className="w-full h-full bg-[url('/2innerbgblue.png')] bg-cover hidden lg:block lg:absolute  text-[#FAFAFA]  pl-13 pr-[10.5rem] xl:pr-[17rem] 2xl:pr-[15rem] lg:py-5 xl:py-7 2xl:py-12 rounded-4xl opacity-0 group-hover:opacity-100 duration-1000 ease-in-out">
            <h1 className="text-start lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
              Focused faces—learning mode: ON!
            </h1>

            <div className=" h-[12rem] w-[19rem] xl:h-[16rem] xl:w-[23rem] 2xl:h-[19rem] 2xl:w-[28rem] absolute top-13 left-[6.8rem] 2xl:top-14 2xl:left-[9rem] z-10 ">
              <img
                src={innerImage2}
                alt="Boy image"
                className="h-full w-full object-cover absolute z-10 "
              />
            </div>
            {/* Arrow buttons */}
            <button className="text-[#1F2937] text-xl lg:p-5 xl:p-6 2xl:p-7  rounded-full inline-block absolute lg:top-[6rem] lg:-left-3  xl:top-32 xl:left-[31.3rem] 2xl:top-[9rem] 2xl:left-[35.5rem] shadow-xl shadow-gray-800 bg-amber-50 ">
              <FaArrowRightLong />
            </button>
            <div className="text-[#1F2937] text-xl lg:p-5 xl:p-6 2xl:p-7  rounded-full inline-block absolute lg:top-[6rem] lg:left-[24.5rem] xl:top-32 xl:-left-2 2xl:top-[9rem] 2xl:-left-2 shadow-xl shadow-gray-800 bg-amber-50">
              <FaArrowLeftLong />
            </div>
          </div>

          {/*upper layer card  */}
          <div className="  w-full h-full lg:absolute bg-[#5492A0] text-[#FAFAFA]  pl-6 py-8 space-y-6 md:pl-8 md:py-12 lg:py-6 xl:py-9 2xl:py-12 md:space-y-12 lg:space-y-5 xl:space-y-7 2xl:space-y-12  rounded-4xl  card-Bounce group-hover:-translate-x-[1500px] group-hover:opacity-0 duration-1000 z-20">
            {/* illustration */}
            <div className="h-[16rem] w-auto  absolute top-6 left-[15rem] md:h-[27rem] md:top-5 md:left-[29rem] lg:left-75 lg:top-10 lg:h-[17rem] xl:h-[22rem] xl:top-6 xl:left-[24rem] 2xl:h-[26rem] 2xl:top-6 2xl:left-[25rem] image-Bounce ">
              <img
                src={boyImage2}
                alt="Boy image"
                className="h-full w-full object-cover"
              />
            </div>
            {/* text */}
            <div className=" space-y-2 ">
              <h1 className="text-xl md:text-4xl lg:text-2xl 2xl:text-3xl font-bold">
                Learn by Doing
              </h1>
              <h2 className="text-sm md:text-2xl lg:text-xl 2xl:text-2xl">
                Practical skills, real projects.
              </h2>
            </div>

            <p className=" text-xs mr-[8rem] md:text-2xl lg:text-sm xl:text-lg 2xl:text-lg md:mr-[14rem] md:pr-[2rem] lg:mr-[6rem] xl:mr-[7rem] 2xl:mr-[14rem]  inline-block ">
              Theory is great, but action is better. At SkillShikshya, you learn
              by doing. Hands-on projects and real-world scenarios help you
              build, break, and create—leading to true mastery.
            </p>
          </div>
        </div>

        {/* grid-3 */}

        <div
          className=" bg-[#6C64A8] text-[#FAFAFA]  pr-6 py-8 space-y-6 md:pr-8 md:py-12 lg:py-6 xl:py-9 2xl:py-12 md:space-y-12 lg:space-y-6  xl:space-y-7 2xl:space-y-12 relative rounded-4xl  card-Bounce"
          dir="rtl"
        >
          {/* illustration */}
          <div className="h-[12rem] w-auto  absolute top-22 -left-9 md:h-[22.5rem] md:top-20 md:-left-28 lg:h-[16rem] lg:top-[3rem] lg:-left-22 xl:h-[19rem] xl:top-16 xl:-left-23 2xl:h-[21rem] 2xl:top-[6rem] 2xl:-left-17 image-Bounce">
            <img
              src={girlImage3}
              alt="Boy image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" space-y-2">
            <h1 className="text-xl md:text-4xl 2xl:text-3xl lg:text-xl font-bold">
              Get Mentored & Supported
            </h1>
            <h2 className="text-sm md:text-2xl lg:text-xl 2xl:text-2xl">
              .You're not learning alone
            </h2>
          </div>
          <p className="text-xs ml-[9.5rem] pl-1 md:text-2xl lg:text-sm xl:text-lg  2xl:text-lg md:ml-[15rem] lg:ml-[10rem] xl:ml-[13.1rem] 2xl:ml-[18rem] inline-block">
            Stuck or need feedback? SkillShikshya’s community of mentors and
            learners has your back with live support, interactive discussions,
            and expert insights. You’re never on your own.
          </p>
        </div>

        {/* grid-4 */}
        <div className=" bg-[#A88964]  text-[#FAFAFA]  pl-6 py-8 space-y-6 md:pl-8 md:py-12 lg:py-7 xl:py-9 2xl:py-12  md:space-y-12 lg:space-y-5 xl:space-y-7  2xl:space-y-12 relative rounded-4xl ">
          {/* illustration */}
          <div className="h-[13rem] w-auto absolute top-[3rem] left-[14rem] md:h-[23rem]  md:top-[3rem] md:left-[25rem] lg:h-[14rem]  lg:top-13 lg:left-[17rem] xl:h-[19rem] xl:top-10 xl:left-88 2xl:h-[22rem]  2xl:top-14 2xl:left-[22rem] image-Bounce ">
            <img
              src={boyImage4}
              alt="Boy image"
              className="h-full w-full object-cover overflow-visible"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl md:text-4xl 2xl:text-3xl lg:text-2xl font-bold">
              Achieve & Showcase
            </h1>
            <h2 className="text-sm md:text-2xl lg:text-xl 2xl:text-2x">
              Build your portfolio, get job-ready.
            </h2>
          </div>

          <p className="text-xs mr-[8rem] md:text-2xl md:mr-[6rem] lg:text-sm xl:text-lg  2xl:text-lg md:pr-[6rem] lg:pr-[0rem] 2xl:pr-[6rem] lg:mr-[8rem] xl:mr-[10rem] 2xl:mr-[11rem] inline-block">
            Your journey ends with achievement. Each completed project builds a
            portfolio showcasing your skills and job readiness, bringing you
            closer to that dream job, promotion, or your own venture.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Task2;
