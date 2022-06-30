import React, { useEffect, useState } from 'react';

import DietaryRequirementsApi from '../api/api';
import Restaurants from '../components/Restaurants';

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(function getCompanyAndJobsForUser() {
    async function getRestaurants() {
      const res = await DietaryRequirementsApi.getRestaurants();
      setRestaurants(res);
    }

    getRestaurants();
  }, []);
  // console.log(dishes);
  if (!restaurants) return <h1>Loading....</h1>;
  return <Restaurants restaurants={restaurants} />;
};

export default RestaurantsPage;
