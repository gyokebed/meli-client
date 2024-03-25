import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: '';
  title: '';
  description: '';
  picture: '';
  price: { amount: 0 };
  condition: '';
  sold_quantity: 0;
}

const fetchProduct = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`
  );
  return data.item;
};

const useProduct = (id: string) => {
  return useQuery<Product, Error>({
    queryKey: ['detail', id],
    queryFn: () => fetchProduct(id),
    staleTime: 60 * 1000,
    retry: 3,
  });
};
export default useProduct;
