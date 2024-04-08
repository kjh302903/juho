import React from "react";
import Background from "../Background";

const Intro = () => {
  return (
    <Background>
      <div id="intro">
        <p
          className="relative inline-block z-10 pr-1 text-white text-5xl whitespace-nowrap overflow-hidden
          after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:text-white after:overflow-hidden after:border-r-4 after:border-white
          animate-typing after:animate-blink"
        >
          강주호의 포트폴리오입니다.
        </p>
      </div>
    </Background>
  );
};

export default Intro;
