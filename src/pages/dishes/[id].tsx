import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import DietaryRequirementsApi from "../../api/api";
import Dish from "../../components/Dish";
import { updateDishes, updateRestaurants } from "../../redux/actions/main";

const dish = () => {
  console.log("getting individual dish");
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const dish = useSelector((store) => store.main.dishes);
  const restaurant = useSelector((store) => store.main.restaurants);
  const [dishInfo, setdishInfo] = useState([]);
  useEffect(function getDishes() {
    async function getData() {
      const res1 = await DietaryRequirementsApi.getDishById(id);
      console.log(res1);
      dispatch(updateDishes(res1));
      setdishInfo(res1);
      if (dishInfo.length > 0) {
        console.log(restaurant);
        const res2 = await DietaryRequirementsApi.getRestaurantById(
          dish[0].restaurantid
        );
        console.log(res2);
        dispatch(updateRestaurants(res2));
      }
    }

    getData();
  }, []);
  useEffect(
    function getDishes() {
      async function getData() {
        if (dishInfo.length > 0) {
          const res2 = await DietaryRequirementsApi.getRestaurantById(
            dish[0].restaurantid
          );
          console.log(res2);
          dispatch(updateRestaurants(res2));
        }
      }

      getData();
    },
    [dishInfo]
  );
  if (!dish[0]) return <h1>Loading....</h1>;
  if (!restaurant[0]) return <h1>Loading....</h1>;
  console.log(restaurant[0]);
  return (
    <Dish
      restaurantId={restaurant[0].id}
      restaurantName={restaurant[0].restaurant_name}
      name={dish[0].dish_name}
      description={dish[0].description}
      url={restaurant[0].url}
      contains={dish[0].contains}
      kcal={dish[0].kcal}
      type={dish[0].type}
    />
  );
};

export default dish;
