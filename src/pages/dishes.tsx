import { useRouter } from 'next/router';

const Dishes = () => {
  const router = useRouter();
  const { gf } = router.query;

  return <div>{JSON.stringify(router.query)}</div>;
};

export default Dishes;
