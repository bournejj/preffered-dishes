import { useState, useEffect } from 'react';

import DietaryRequirementsApi from '../../api/api';
import Dishes from '../../components/Dishes';

const Items = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(function getCompanyAndJobsForUser() {
    async function getDishes() {
      const res = await DietaryRequirementsApi.getDishes();
      console.log(res);
      const sorted = res.sort(() => Math.random() - Math.random()).slice(0, 9);
      setDishes(sorted);
    }

    getDishes();
  }, []);
  console.log(dishes);
  if (!dishes) return <h1>Loading....</h1>;

  return (
    <div>
      <Dishes dishes={dishes} />
    </div>
  );
};

export default Items;
