'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/items?search=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid search">
        <div className="col-12 col-md-1 col-offset-1">
          <Link href="/">
            <Image src="/Logo_ML.png" width={53} height={36} alt="Logo" />
          </Link>
        </div>
        <div className="col-12 col-md-8">
          <input
            placeholder="Nunca dejes de buscar"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" disabled={!!!searchTerm}>
            <Image
              src="/ic_Search.png"
              width={15}
              height={15}
              alt="Search image"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
