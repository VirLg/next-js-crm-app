'use client';
import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '../../button/Button';

interface FormAddCompanyValues {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
}

const FormAddCompany: React.FC<{}> = () => {
  const initialValues: FormAddCompanyValues = {
    name: '',
    status: '',
    country: '',
    category: '',
    date: '',
    description: '',
  };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name" className={`mb-2 text-base color-gray-900`}>
            name
          </label>
          <Field
            id="name"
            name="name"
            placeholder="name"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />

          <label htmlFor="status" className={`mb-2 text-base color-gray-900`}>
            status
          </label>
          <Field
            id="status"
            name="status"
            placeholder="status"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />

          <label htmlFor="country" className={`mb-2 text-base color-gray-900`}>
            country
          </label>
          <Field
            id="country"
            name="country"
            placeholder="country"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />

          <label htmlFor="category" className={`mb-2 text-base color-gray-900`}>
            category
          </label>
          <Field
            id="category"
            name="category"
            placeholder="category"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />

          <label htmlFor="date" className={`mb-2 text-base color-gray-900`}>
            date
          </label>
          <Field
            id="date"
            name="date"
            placeholder="date"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />

          <label
            htmlFor="description"
            className={`mb-2 text-base color-gray-900`}
          >
            description
          </label>
          <Field
            id="description"
            name="description"
            placeholder="description"
            className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          />
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
};
export default FormAddCompany;
