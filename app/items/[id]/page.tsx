'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

const ProductDetail = ({ params }: Props) => {
  const [data, setData] = useState<{
    item: {
      id: string;
      title: string;
      description: string;
      picture: string;
      price: { amount: number };
      condition: string;
      sold_quantity: number;
    };
  }>({
    item: {
      id: '',
      title: '',
      description: '',
      picture: '',
      price: { amount: 0 },
      condition: '',
      sold_quantity: 0,
    },
  });

  const { id } = params;

  useEffect(() => {
    axios.get(`http://localhost:3000/api/items/${id}`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div className="grid">
      <div className="col-12 col-md-7 col-offset-1">
        <Image
          src={data.item.picture}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 680, height: 'auto' }}
          alt="Product Image"
        />
        <div className="m-b-2x m-l-2x">
          <h2 className="text-sm-2x m-b-2x">Descripci&oacute;n del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
      <div className="col-12 col-md-3">
        {data.item.condition === 'new' && (
          <p className="text-sm m-t-2x m-b">
            <span>Nuevo - {data.item.sold_quantity} vendidos</span>
          </p>
        )}
        <h1 className="m-b-2x">{data.item.title}</h1>
        <div className="text-xl m-b-2x">
          <span>$ {data.item.price.amount} </span>
        </div>
        <div className="m-r-2x">
          <button
            onClick={() => console.log('Comprar')}
            className="btn btn-lg text-lg"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
