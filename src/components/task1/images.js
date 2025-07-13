import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import image5 from "../../assets/image-5.png";
import image6 from "../../assets/image-6.png";
import happylife from "../../assets/happy-life.gif";
import like from "../../assets/like.gif";
import trophy from "../../assets/trophy.gif";
import likemsg from "../../assets/likemsg.gif";
import "./Task1.css";

export const images = [
  {
    src: image1,
    alt: "student image",
    wrapperClass:
      "absolute top-12 -left-4 md:top-12 md:-left-20 lg:top-25 lg:-left-20 xl:top-30 xl:left-5 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl transform group-hover:-translate-x-48 group-hover:-translate-y-25 transition-all duration-300 group-hover-smooth-bounce ",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: happylife,
    alt: "happy life gif",
    wrapperClass:
      "absolute top-26 -left-2 md:top-31 md:-left-10 lg:top-50 lg:-left-15 xl:top-56 xl:left-15 h-14 w-14 md:h-18 md:w-18 lg:h-25 lg:w-25 rounded-xl lg:rounded-4xl transform group-hover:-translate-x-30 group-hover:-translate-y-10 transition-all duration-300",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: image6,
    alt: "student image",
    wrapperClass:
      "absolute top-35 left-8 md:top-40 md:left-8 lg:top-60 lg:left-10 xl:top-63 xl:left-40 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl transform group-hover:-translate-x-20 group-hover:translate-y-20 transition-all duration-300 group-hover-smooth-bounce2",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: trophy,
    alt: "trophy gif",
    wrapperClass:
      "absolute top-30 left-26 md:top-37 md:left-36 lg:top-51 lg:left-40 xl:top-57 xl:left-72 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl p-1 transform group-hover:-translate-x-0 group-hover:translate-y-45 transition-all duration-300",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: image5,
    alt: "student image",
    wrapperClass:
      "absolute top-32 left-45 md:top-38 md:left-68 lg:top-52 lg:left-72 xl:top-58 xl:left-103 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl p-1 hover:shadow-lg shadow-blue-400 transform group-hover:translate-x-25 group-hover:translate-y-32 transition-all duration-300 group-hover-smooth-bounce z-0",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
    amazingBox: {
      amzClass:
        "absolute top-6 left-10 md:top-10 md:left-15 lg:top-12 lg:left-22 xl:top-12 xl:left-22 z-10 h-7 w-27 md:h-8 md:w-27 text-start text-[8px] p-2 rounded-lg bg-white shadow-md shadow-gray-500 amazing-pop-up",
    },
    testimonialVideo: {
      testimonialsclass:
        "p-1 h-[16rem] w-[10rem]  bg-white rounded-xl absolute -top-63 -left-5 shadow-lg transition-all duration-1000 ease-out",
    },
  },
  {
    src: likemsg,
    alt: "like gif",
    wrapperClass:
      "absolute top-25 left-62 md:top-33 md:left-95 lg:top-48 lg:left-105 xl:top-50 xl:left-135 h-14 md:h-20 md:w-20 w-14 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl transform group-hover:translate-x-20 group-hover:translate-y-0 transition-all duration-300 z-10",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl ",
  },
  {
    src: image4,
    alt: "student image",
    wrapperClass:
      "absolute top-5 left-70 md:top-5 md:left-106 lg:top-18 lg:left-113 xl:top-23 xl:left-145 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl  transform group-hover:translate-x-55 group-hover:translate-y-0 transition-all duration-300 group-hover-smooth-bounce2",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: image3,
    alt: "student image",
    wrapperClass:
      "absolute -top-10 left-42 md:-top-18 md:left-61 lg:-top-10 lg:left-65 xl:-top-4 xl:left-100 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl p-1 transform group-hover:translate-x-45 group-hover:-translate-y-25 transition-all duration-300 group-hover-smooth-bounce",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: like,
    alt: "like gif",
    wrapperClass:
      "absolute -top-9 left-20 md:-top-18 md:left-30 lg:-top-10 lg:left-34 xl:-top-4 xl:left-62 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl  transform group-hover:translate-x-5 group-hover:-translate-y-20 transition-all duration-300",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
  },
  {
    src: image2,
    alt: "student image",
    wrapperClass:
      "absolute -top-8 left-1 md:-top-16 md:left-0 lg:-top-8 lg:left-0 xl:-top-2 xl:left-30 h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25 rounded-2xl lg:rounded-4xl p-1 hover:shadow-lg shadow-blue-400 transform transform group-hover:-translate-x-35 group-hover:-translate-y-30 transition-all duration-300 group-hover-smooth-bounce2 ",
    imgClass: "h-full w-full object-cover rounded-2xl lg:rounded-4xl",
    amazingBox: {
      amzClass:
        "absolute top-6 left-10 md:top-10 md:left-16 lg:top-12 lg:left-22 xl:top-12 xl:left-22 z-50 h-7 w-27 md:h-8 md:w-27 text-start text-[8px] p-2 rounded-lg bg-white shadow-md shadow-gray-500 amazing-pop-up",
    },
    testimonialCard: {
      testimonialsclass:
        "bg-white text-xs text-[#2B2B2B]  w-[21rem] h-auto absolute top-24 -left-24 p-3 rounded-lg shadow-lg transform transition-all duration-1000 z-30",
    },
  },
];
