'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchResults = () => {
  const [data, setData] = useState<
    {
      id: string;
      title: string;
      picture: string;
      price: { amount: number };
      free_shipping: boolean;
    }[]
  >([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/items?q=${searchTerm}`)
      .then((resp) => {
        setData(resp.data.items);
      });
  }, [searchParams]);

  return (
    <>
      {data.slice(0, 4).map((item) => (
        <div className="grid results" key={item.id}>
          <div className="col-12 col-md-8 col-offset-1">
            <Link href={`/items/${item.id}`}>
              <Image
                src={item.picture}
                width={180}
                height={180}
                alt="Product Image"
              />
            </Link>
            <div>
              <span>$ {item.price.amount} </span>
              {item.free_shipping && (
                <Image
                  src="/ic_shipping@2x.png.png"
                  width={18}
                  height={18}
                  alt="Free Shipping"
                />
              )}
              <Link href={`/items/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-1">
            <p>Capital federal</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
