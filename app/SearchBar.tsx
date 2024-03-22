'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

function SearchBar() {
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
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
