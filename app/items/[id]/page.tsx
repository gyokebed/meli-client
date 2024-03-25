import React from 'react';
import ProductDetail from '@/app/items/_components/ProductDetail';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  console.log(params);

  return <ProductDetail params={params} />;
};

export default ProductDetailPage;

export const metadata: Metadata = {
  title: `MELI - Detalle del producto`,
  description: 'Detalle del producto',
};
