import React from 'react';

export type FormAddCompanyValues = {
  name: string;
  status: string;
  country: string;
  categiry: string;
  date: string;
  description: string;
};
const initiatValue = {
  name: '',
  status: '',
  country: '',
  categiry: '',
  date: '',
  description: '',
};
export interface FormAddCompanyProps {
  onSubmit: (values: FormAddCompanyValues) => void | Promise<void>;
}
type Props = {};

const FormAddCompany = (props: Props) => {
  return <div>FormAddCompany</div>;
};
export default FormAddCompany;
