'use client';
import React, { useState } from 'react';
import Button from '../button/Button';
import ModalWindow from '../modalWindow/ModalWindow';
import FormAddCompany from '../forms/formAddCompany/FormAddCompany';
import { useSearchParams } from 'next/navigation';

export interface AddCompanyComponentProps {
  show: boolean;
  children: React.ReactNode;
  data: () => void;
  onClose: () => void;
  prop: boolean;
}

const AddCompanyComponent = ({
  children,
  data,
  onClose,
  prop,
}: AddCompanyComponentProps) => {
  const [showModal, setShow] = useState(false);
  useSearchParams();
  const closeModal = () => {
    setShow(true);
  };
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
