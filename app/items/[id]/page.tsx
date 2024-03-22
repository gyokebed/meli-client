'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  params: { id: string };
}

const ProductDetail = ({ params }: Props) => {
  const [data, setData] = useState<{
    item: { id: string; title: string; description: string };
  }>({
    item: { id: '', title: '', description: '' },
  });

  const { id } = params;

  useEffect(() => {
    axios.get(`http://localhost:3000/api/items/${id}`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      <p>{data.item.title}</p>
      <p>{data.item.description}</p>
    </div>
  );
};

export default ProductDetail;
