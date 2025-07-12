import React, { useEffect, useState } from "react";

const Task3 = () => {
  const [boxCount, setBoxCount] = useState(168);
  const [activeBoxes, setActiveBoxes] = useState([]);

  useEffect(() => {
    setActiveBoxes(Array(boxCount).fill(false));
  }, [boxCount]);

  useEffect(() => {
    const updateBoxCount = () => {
      if (window.innerWidth < 768) setBoxCount(90);
      else if (window.innerWidth < 1024) setBoxCount(247);
      else if (window.innerWidth <= 1024 && window.innerHeight == 600)
        setBoxCount(96);
      else if (window.innerWidth <= 1280 && window.innerHeight == 800)
        setBoxCount(128);
      else setBoxCount(175);
    };
    updateBoxCount();
    window.addEventListener("resize", updateBoxCount);
    return () => window.removeEventListener("resize", updateBoxCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 6 unique random indices
      const indices = [];
      while (indices.length < 7) {
        const idx = Math.floor(Math.random() * boxCount);
        if (!indices.includes(idx)) indices.push(idx);
      }
      setActiveBoxes((prev) => {
        const newArr = [...prev];
        indices.forEach((idx) => (newArr[idx] = true));
        setTimeout(() => {
          setActiveBoxes((current) => {
            const arr = [...current];
            indices.forEach((idx) => (arr[idx] = false));
            return arr;
          });
        }, 2000); // blink duration
        return newArr;
      });
    }, 2000); // blink every 2000ms
    return () => clearInterval(interval);
  }, [boxCount]);

  return (
    <main className="min-h-screen max-w-screen flex flex-wrap bg-white/90 ">
      {Array.from({ length: boxCount }).map((_, i) => {
        return (
          <div
            key={i}
            className={`border border-gray-400 flex-1 max-h-28 min-w-10 md:h-[78.77px] md:w-12 lg:min-h-[100px] lg:min-w-[80px] xl:min-w-[60px] xl:min-h-[106px] transition-colors duration-800 ${
              activeBoxes[i] ? "bg-purple-600" : ""
            }`}
          ></div>
        );
      })}
    </main>
  );
};

export default Task3;
