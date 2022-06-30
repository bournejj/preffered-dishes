import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import DietaryRequirementsApi from '../../api/api';
import Dishes from '../../components/Dishes';

const RestaurantDishes = () => {
  const router = useRouter();
  const { id } = router.query;

  const [dishes, setDishes] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  useEffect(function getCompanyAndJobsForUser() {
    async function getDishes() {
      const res = await DietaryRequirementsApi.getDishesByRestaurant(id);
      const restaurantRes = await DietaryRequirementsApi.getRestaurantById(id);
      console.log(res);

      setDishes(res);
      setRestaurant(restaurantRes);
    }

    getDishes();
  }, []);

  if (!dishes) return <h1>Loading....</h1>;

  return (
    <div>
      <Dishes dishes={dishes} />
    </div>
  );
};

export default RestaurantDishes;
