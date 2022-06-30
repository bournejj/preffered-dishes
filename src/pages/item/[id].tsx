import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import DietaryRequirementsApi from '../../api/api';
import Item from '../../components/Item';

const ItemInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [item, setItem] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  useEffect(function getCompanyAndJobsForUser() {
    async function getDishes() {
      const res = await DietaryRequirementsApi.getDishById(id);
      const Restaurant_id = res[0].restaurantid;
      const restaurantRes = await DietaryRequirementsApi.getRestaurantById(
        Restaurant_id
      );
      console.log(restaurantRes);
      console.log(res);

      setItem(res[0]);
      setRestaurant(restaurantRes[0]);
    }

    getDishes();
  }, []);

  console.log(restaurant.id);

  if (!item) return <h1>Loading....</h1>;
  return (
    <Item
      name={item.dish_name}
      description={item.description}
      restaurant_id={restaurant.id}
    />
  );
};

export default ItemInfo;
