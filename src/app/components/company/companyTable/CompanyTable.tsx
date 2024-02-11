import React from 'react';

export interface CompaanyTableProps {
  children: React.ReactNode;
}

const CompanyTable = ({ children }: CompaanyTableProps) => {
  return <div>{children}</div>;
};

export default CompanyTable;
