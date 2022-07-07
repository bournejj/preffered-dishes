import { useEffect } from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import DietaryRequirementsApi from "../../api/api";
import Restaurants from "../../components/Restaurants";
import { updateRestaurants } from "../../redux/actions/main";

const restaurant = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  console.log("yes");

  useEffect(function getDishes() {
    async function getData() {
      const res2 = await DietaryRequirementsApi.getRestaurantById(id);

      dispatch(updateRestaurants(res2));
    }

    getData();
  }, []);

  return <Restaurants />;
};

export default restaurant;
