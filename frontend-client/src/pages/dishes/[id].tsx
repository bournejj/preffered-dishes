import { useState } from "react";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Dish from "../../components/Dish";
import { useGetDishByIdQuery } from "../../services/apiSlice.js";

const dish = () => {
  const [dish, setDish] = useState();
  const dispatch = useDispatch();
  console.log("getting individual dish");
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, isFetching, isSuccess, refetch } =
    useGetDishByIdQuery(id);

  const dishes = useSelector((store) => store.dishes);
  if (isSuccess) {
    console.log(data[0]);
  }

  // const dispatch = useDispatch();
  // const dish = useSelector((store) => store.main.dishes);
  // const restaurant = useSelector((store) => store.main.restaurants);
  // const [dishInfo, setdishInfo] = useState([]);
  // useEffect(function getDishes() {
  //   async function getData() {
  //     const res1 = await DietaryRequirementsApi.getDishById(id);
  //     console.log(res1);
  //     dispatch(updateDishes(res1));
  //     setdishInfo(res1);
  //     if (dishInfo.length > 0) {
  //       console.log(restaurant);
  //       const res2 = await DietaryRequirementsApi.getRestaurantById(
  //         dish[0].restaurantid
  //       );
  //       console.log(res2);
  //       dispatch(updateRestaurants(res2));
  //     }
  //   }

  //   getData();
  // }, []);
  // useEffect(
  //   function getDishes() {
  //     async function getData() {
  //       if (dishInfo.length > 0) {
  //         const res2 = await DietaryRequirementsApi.getRestaurantById(
  //           dish[0].restaurantid
  //         );
  //         console.log(res2);
  //         dispatch(updateRestaurants(res2));
  //       }
  //     }

  //     getData();
  //   },
  //   [dishInfo]
  // );
  // if (!dish[0]) return <h1>Loading....</h1>;
  // if (!restaurant[0]) return <h1>Loading....</h1>;
  // console.log(restaurant[0]);
  return (
    <div>
      {isSuccess ? <Dish data={data} /> : <h1>...loading</h1>}

      {/* <Dish
        name={data.dish_name}
        description={data.description}
        contains={data.contains}
        kcal={data.kcal}
        type={data.type}
      /> */}
    </div>
  );
};

export default dish;
