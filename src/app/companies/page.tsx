import React from 'react';
import Header from '../components/header/Header';
import ToolBar from '../components/toolBar/ToolBar';
import SearchInput from '../components/searchInput/SearchInput';
import CompanyTable from '../components/company/companyTable/CompanyTable';
import CompanyRow from '../components/company/companyRow/CompanyRow';
import Button from '../components/button/Button';

type Props = {};

const Companies = (props: Props) => {
  return (
    <div>
      <Header />
      <ToolBar action={<Button />}>
        <SearchInput />
      </ToolBar>
      <CompanyTable>
        <CompanyRow />
      </CompanyTable>
    </div>
  );
};

export default Companies;
