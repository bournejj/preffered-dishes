import React from 'react';

import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <div>
        <h1 className=" sm:text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Restaurants</span>
        </h1>
        <span></span>
        <div className=" absolute bottom-0 left-0 CompanyList col-md-8 offset-md-2">
          {restaurants.length ? (
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
              {restaurants.map((r) => (
                <Restaurant
                  key={r.id}
                  name={r.restaurant_name}
                  url={r.url}
                  address={r.address}
                  id={r.id}
                />
              ))}
            </div>
          ) : (
            <p className="lead">Sorry, no results were found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
