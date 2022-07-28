import React from "react";

import { useSelector } from "react-redux";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const { dishes } = useSelector((store) => store);
  console.log(mainHero);
  return (
    <div>
      <div>
        <div className="flex ml-20  ">
          <p className=" absolute sketchy  -rotate-12   top-32 pl-7  ">
            <img
              className="h-4"
              src="https://cdn-icons.flaticon.com/png/512/4626/premium/4626768.png?token=exp=1658919906~hmac=dd1a17c133d2e3e2dd680da0002f11c3"
              alt=""
            />
            choose your dish based on descreption and name
          </p>
        </div>
        <div className="absolute top-60 left-52">
          <img
            className="h-48 pt-20 top-10 mr-26 "
            src="https://cdn-icons-png.flaticon.com/512/64/64818.png"
            alt=""
          />
        </div>
      </div>
      <div className="center ">
        <div className="sm:text-center">
          <h1 className=" text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pt-12">
            <span className="block xl:inline">{mainHero.title}</span>
            <span className="text-red-500">
              {" "}
              {mainHero.secondaryTitle.text}
            </span>
            <span> {mainHero.thirdTitle.text}</span>
            <span className={`block text-primary xl:inline`}>
              {mainHero.subtitle}
            </span>
          </h1>
          <p className="  mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {mainHero.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
