'use client';

import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchResults = () => {
  const [data, setData] = useState<{ id: string; title: string }[]>([]);
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
    <ul>
      {data.slice(0, 4).map((item) => (
        <li key={item.id}>
          <Link href={`/items/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
