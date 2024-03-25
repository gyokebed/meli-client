import '@/styles/Layout.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SearchBar from './SearchBar';
import QueryClientProvider from './QueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MELI',
  description: 'MELI Front End Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <SearchBar />
          <main>{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
