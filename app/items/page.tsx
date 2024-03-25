import SearchResults from '@/app/items/_components/SearchResults';
import { Metadata } from 'next';

const ResultsPage = () => {
  return <SearchResults />;
};

export default ResultsPage;

export const metadata: Metadata = {
  title: 'MELI - Resultados',
  description: 'Resultados de la búsqueda',
};
