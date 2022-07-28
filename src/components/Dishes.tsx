import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getRandom, getDishes } from "../features/dishes/dishesSlice.js";
import { useGetDishesQuery } from "../services/apiSlice.js";
import Dish from "./Dish.tsx";
// import getDishes from '../redux/hooks/dishes';

const Dishes = () => {
  const query = useSelector((store) => store.filterOptions.query);
  const apiQuery = useSelector((store) => store.filterOptions.apiQuery);
  console.log(apiQuery);
  const searchQuery = useSelector((store) => store.filterOptions.searchQuery);
  const { data, error, isLoading, isFetching, isSuccess, refetch } =
    useGetDishesQuery(apiQuery);
  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();
  const dishes = useSelector((store) => store.dishes);

  console.log(data);

  useEffect(() => {
    if (isSuccess && query.length === 0) {
      console.log("getting random");
      dispatch(getRandom(data));
    } else if (query.length > 0) {
      dispatch(getDishes(data));
    }
  }, [data]);
  useEffect(() => {
    console.log("changing search");
    console.log(query);
    refetch(apiQuery);
  }, [apiQuery]);

  if (!dishes) return <h1>Loading....</h1>;

  return (
    <div>
      <div className=" CompanyList col-md-8 offset-md-2">
        {dishes.dishes[0] && isSuccess ? (
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {dishes.dishes.map((d) => (
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
      {/* <div className="App">
        <h1>React Redux Toolkit RTK Query Tutorial</h1>
        {isLoading && <h2>...Loading</h2>}
        {isFetching && <h2>...isFetching</h2>}
        {error && <h2>Something went wrong</h2>}
        {isSuccess && (
          <div>
            {data?.map((contact) => {
              return (
                <div className="data">
                  <span>{data.dish_name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Dishes;
