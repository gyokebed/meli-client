import React from 'react';
import ProductDetail from '@/app/items/_components/ProductDetail';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  return <ProductDetail params={params} />;
};

export default ProductDetailPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: `ID del producto: ${id}`,
    description: 'Detalle del producto.',
  };
}
