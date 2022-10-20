import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Restaurant from "../../components/Restaurant";
import { useGetRestaurantByIdQuery } from "../../services/apiSlice";

const restaurant = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, isFetching, isSuccess, refetch } =
    useGetRestaurantByIdQuery(id);


  return (
    <div>
      {isSuccess ? (
        <Restaurant
          restaurant_name={data[0].restaurant_name}
          address={data[0].address}
          url={data[0].url}
        />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default restaurant;
