import React from "react";

import config from "../config/index.json";

const DishHeader = () => {
  const { mainHero } = config;
  return (
    <div className="center">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center ">
          <h1 className=" text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
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
          <p className=" py-2 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {mainHero.description}
          </p>
        </div>
      </main>
    </div>
  );
};

export default DishHeader;
