'use client';

import { CurrencyFormat, ShippingBadge } from '@/app/components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Products {
  id: string;
  title: string;
  picture: string;
  price: { amount: number };
  free_shipping: boolean;
}

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Products[], Error>({
    queryKey: ['products', searchTerm],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/items?q=${searchTerm}`)
        .then((res) => res.data.items),
    retry: 3,
  });

  if (isLoading) return 'Cargando...';

  if (error) return error.message;

  return (
    <>
      {products?.slice(0, 4).map((item) => (
        <div className="grid p-y" key={item.id}>
          <div className="col-12 col-md-8 col-offset-1 flex">
            <Link href={`/items/${item.id}`}>
              <Image
                className="m-x border-sm"
                src={item.picture}
                width={180}
                height={180}
                alt="Product Image"
              />
            </Link>
            <div>
              <div className="m-b-2x">
                <div className="text-xs-2x m-r inline">
                  <CurrencyFormat currencyId="ARS" value={item.price.amount} />
                </div>
                {item.free_shipping && <ShippingBadge />}
              </div>
              <Link href={`/items/${item.id}`}>
                <h1 className="text-lg text-lg__base">{item.title}</h1>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-1">
            <p className="text-xs m-t-3x">Capital federal</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
