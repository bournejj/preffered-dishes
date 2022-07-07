import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import DietaryRequirementsApi from "../api/api";
import { updateDishes } from "../redux/actions/main";
import Dish from "./Dish";

const Dishes = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((store) => store.main.dishes);

  const query = useSelector((store) => store.main.query);
  const searchQuery = useSelector((store) => store.main.searchQuery);

  useEffect(
    function getDishes() {
      async function getDishes() {
        if (query.length <= 0) {
          const res = await DietaryRequirementsApi.getDishes(query);
          function getMultipleRandom(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
          }
          dispatch(updateDishes(getMultipleRandom(res, 9)));
        } else if (query.length > 0 && searchQuery.length > 0) {
          const filterQuery = query.replace(query[0], "&");

          const res = await DietaryRequirementsApi.getDishes(
            `?${searchQuery.toLowerCase()}${filterQuery}`
          );

          dispatch(updateDishes(res));
        } else if (searchQuery.length > 0) {
          const res = await DietaryRequirementsApi.getDishes(
            `?${searchQuery.toLowerCase()}`
          );

          dispatch(updateDishes(res));
        } else {
          const res = await DietaryRequirementsApi.getDishes(query);
          console.log(res);
          dispatch(updateDishes(res));
        }
      }
      getDishes();
    },
    [query, searchQuery]
  );

  if (!dishes) return <h1>Loading....</h1>;

  return (
    <div>
      <div className=" CompanyList col-md-8 offset-md-2">
        {dishes.length > 0 ? (
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {dishes.map((d) => (
              <Dish
                key={d.id}
                name={d.dish_name}
                description={d.description}
                price={d.price}
                id={d.id}
                restaurantId={d.restaurantid}
                url={d.url}
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
