import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Products {
  id: string;
  title: string;
  picture: string;
  price: { amount: number };
  free_shipping: boolean;
}

const fetchProducts = async (searchTerm: string | null) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items?q=${searchTerm}`
  );
  return data.items;
};

const useProduct = (searchTerm: string | null) => {
  return useQuery<Products[], Error>({
    queryKey: ['products', searchTerm],
    queryFn: () => fetchProducts(searchTerm),
    staleTime: 60 * 1000,
    retry: 3,
  });
};

export default useProduct;
