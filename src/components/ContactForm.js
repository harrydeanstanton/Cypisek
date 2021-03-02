import React from 'react';
import { Formik } from 'formik';
import DataLine from './DataLineInput';
import FormSection from './FormSection';
import DataLineArea from './DataLineArea';

const Basic = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        name: '',
        surname: '',
        pesel: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <FormSection title="Dane osobowe dziecka">
            <DataLine
              type="text"
              name="pesel"
              label="Pesel"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.pesel}
            />
            <DataLine
              type="date"
              name="birth-date"
              label="Data urodzenia"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            <DataLine
              type="text"
              name="name"
              label="Imię"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <DataLine
              type="text"
              name="surname"
              label="Nazwisko"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            <DataLineArea
              type="text"
              name="child_address"
              label="Adres zamieszkania dziecka"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_addres}
            />
            <DataLineArea
              type="text"
              name="child_registered_address"
              label="Adres zameldowania dziecka"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_registered_address}
            />
            <DataLine
              type="email"
              name="email"
              label="Email"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </FormSection>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
