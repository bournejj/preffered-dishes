import React from 'react';

import config from '../config/index.json';
import Dish from './Dish';

const Dishes = ({ dishes }) => {
  console.log(dishes);
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <div>
      <section className={`bg-background py-8`} id="product">
        <div className={`container max-w-5xl mx-auto m-8`}>
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          >
            {product.title.split(' ').map((word, index) => (
              <span
                key={index}
                className={index % 2 ? 'text-primary' : 'text-border'}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <div className=" CompanyList col-md-8 offset-md-2">
        {dishes.length ? (
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {dishes.map((d) => (
              <Dish
                key={d.id}
                name={d.dish_name}
                description={d.description}
                price={d.price}
                id={d.id}
                restaurantId={d.restaurantid}
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
      </div>
    </div>
  );
};

export default Dishes;
