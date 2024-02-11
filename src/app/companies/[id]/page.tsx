import Header from '@/app/components/header/Header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

const page = ({ params }: PageProps) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default page;
