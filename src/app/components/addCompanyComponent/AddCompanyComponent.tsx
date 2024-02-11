'use client';
import React, { useState } from 'react';

// import ModalWindow from '../modalWindow/ModalWindow';
import FormAddCompany from '../forms/formAddCompany/FormAddCompany';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
const ModalWindow = dynamic(() => import('../modalWindow/ModalWindow'), {
  ssr: false,
});
export interface AddCompanyComponentProps {}

const AddCompanyComponent = ({}: AddCompanyComponentProps) => {
  const [showModal, setShow] = useState(false);
  useSearchParams();

  return (
    <div>
      <button onClick={() => setShow(true)}>Add Company</button>
      {showModal && (
        <ModalWindow onClose={() => setShow(false)}>
          <FormAddCompany />
        </ModalWindow>
      )}
    </div>
  );
};

export default AddCompanyComponent;
