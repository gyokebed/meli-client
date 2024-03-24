'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/items?search=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        placeholder="Nunca dejes de buscar"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className=""
      />
      <button className="btn" type="submit" disabled={!!!searchTerm}>
        <Image src="/ic_Search.png" width={15} height={15} alt="Search image" />
      </button>
    </form>
  );
};

export default SearchForm;
