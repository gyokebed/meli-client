'use client';

import { CurrencyFormat, ShippingBadge } from '@/app/components';
import useProducts from '@/app/hooks/useProducts';
import SearchResultsSkeleton from '@/app/items/_components/SearchResultsSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const Results = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  const { data: products, error, isLoading } = useProducts(searchTerm);

  if (isLoading) return <SearchResultsSkeleton />;

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
                alt="Imagen del producto"
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
          <div className="col-12 col-md-1 hide-sm">
            <p className="text-xs m-t-3x">Capital federal</p>
          </div>
        </div>
      ))}
    </>
  );
};

const SearchResults = () => {
  return (
    <Suspense>
      <Results />
    </Suspense>
  );
};

export default SearchResults;
