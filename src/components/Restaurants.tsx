import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import DietaryRequirementsApi from "../api/api";
import { updateRestaurants } from "../redux/actions/main";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((store) => store.main.restaurants);
  useEffect(function getCompanyAndJobsForUser() {
    async function getDishes() {
      const res = await DietaryRequirementsApi.getRestaurants();
      dispatch(updateRestaurants(res));
    }

    getDishes();
  }, []);

  if (!restaurants) return <h1>Loading....</h1>;

  return (
    <div>
      <div className=" CompanyList col-md-8 offset-md-2">
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {restaurants.map((r) => (
            <Restaurant
              key={r.id}
              restaurant_name={r.restaurant_name}
              address={r.address}
              url={r.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
