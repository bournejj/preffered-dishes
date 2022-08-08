import React from "react";

import Link from "next/link";

const Restaurant = ({ id, restaurant_name, address, url }) => {
  return (
    <div className="justify-center	">
      <div className="container mt-12 ml-96 p-6 grid content-center	 ">
        <div className="  p-6  bg-primary rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {restaurant_name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            {address}
          </p>
          <Link href={url}>
            <a
              href={url}
              className="  underline border-white inline-flex items-center py-2 px-3 text-sm font-medium text-center text-primary bg-white  rounded-lg hover:bg-white hover:text-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {restaurant_name} Website
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
