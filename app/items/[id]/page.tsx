'use client';

import { CurrencyFormat } from '@/app/components';
import useProduct from '@/app/hooks/useProduct';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

const ProductDetail = ({ params }: Props) => {
  const { id } = params;

  const { data: product, error, isLoading } = useProduct(id);

  if (isLoading) return 'cargando...';

  if (error) return error.message;

  const condition = product!.condition === 'new';

  return (
    <div className="grid">
      <div className="col-12 col-md-7 col-offset-1">
        <Image
          src={product!.picture}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 680, height: 'auto' }}
          alt="Product Image"
        />
        <div className="m-b-2x m-l-2x">
          <h2 className="text-sm-2x m-b-2x">Descripci&oacute;n del producto</h2>
          <p>{product!.description}</p>
        </div>
      </div>
      <div className="col-12 col-md-3">
        {condition && (
          <p className="text-sm m-t-2x m-b">
            <span>Nuevo - {product!.sold_quantity} vendidos</span>
          </p>
        )}
        <h1 className="m-b-2x">{product?.title}</h1>
        <div className="text-xl m-b-2x">
          <CurrencyFormat currencyId="ARS" value={product!.price.amount} />
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
