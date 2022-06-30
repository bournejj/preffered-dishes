import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import DietaryRequirementsApi from '../../api/api';
import RestaurantInfo from '../../components/RestaurantInfo';
import item from '../item';

const RestaurantPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [restaurant, setRestaurant] = useState([]);
  useEffect(function getCompanyAndJobsForUser() {
    async function getDishes() {
      const restaurantRes = await DietaryRequirementsApi.getRestaurantById(id);
      console.log(restaurantRes);

      setRestaurant(restaurantRes[0]);
    }

    getDishes();
  }, []);

  console.log(restaurant);

  if (!item) return <h1>Loading....</h1>;
  return (
    <RestaurantInfo
      name={restaurant.restaurant_name}
      url={restaurant.url}
      address={restaurant.address}
      id={restaurant.id}
    />
  );
};

export default RestaurantPage;
