'use client';
import React from 'react';

import LableStatus, { Status } from './components/forms/lable/LableStatus';
import AddCompanyComponent from './components/addCompanyComponent/AddCompanyComponent';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <LableStatus status={Status.Active}>Active</LableStatus>
      <LableStatus status={Status.NotActive}>Not Active</LableStatus>
      <LableStatus status={Status.Pending}>Pending</LableStatus>
      <LableStatus status={Status.Suspended}>Suspended</LableStatus>
      <AddCompanyComponent />
    </main>
  );
}
