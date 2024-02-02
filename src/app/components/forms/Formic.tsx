'use client';
import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
}

export const MyApp: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
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
          <label htmlFor="name">name</label>
          <Field id="name" name="name" placeholder="name" />

          <label htmlFor="status">status</label>
          <Field id="status" name="status" placeholder="status" />

          <label htmlFor="country">country</label>
          <Field id="country" name="country" placeholder="country" />

          <label htmlFor="category">category</label>
          <Field id="category" name="category" placeholder="category" />

          <label htmlFor="date">date</label>
          <Field id="date" name="date" placeholder="date" />

          <label htmlFor="description">description</label>
          <Field
            id="description"
            name="description"
            placeholder="description"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
