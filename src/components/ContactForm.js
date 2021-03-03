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
        if (!values.father_email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.father_email)
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
              name="Pesel dziecka"
              label="Pesel"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_pesel}
            />
            <DataLine
              type="date"
              name="Data urodzenia"
              label="Data urodzenia"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_birth_date}
            />
            <DataLine
              type="text"
              name="Imię dziecka"
              label="Imię"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_name}
            />
            <DataLine
              type="text"
              name="Nazwisko dziecka"
              label="Nazwisko"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_surname}
            />
            <DataLineArea
              type="text"
              name="Adres zamieszkania dziecka"
              label="Adres zamieszkania dziecka"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_addres}
            />
            <DataLineArea
              type="text"
              name="Adres zameldowania dziecka"
              label="Adres zameldowania dziecka"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.child_registered_address}
            />
            <DataLine
              type="date"
              name="Data od kiedy dziecko będzie uczęszczało do żłobka"
              label="Data od kiedy dziecko będzie uczęszczało do żłobka"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.date_of_attendace}
            />
          </FormSection>
          <FormSection title="Dane ojca/opiekuna prawnego">
            <DataLine
              type="text"
              name="Imię ojca"
              label="Imię"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_name}
            />
            <DataLine
              type="text"
              name="Nazwisko ojca"
              label="Nazwisko"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_surname}
            />
            <DataLine
              type="text"
              name="Pesel ojca"
              label="Pesel"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_pesel}
            />
            <DataLineArea
              type="text"
              name="Adres zameldowania ojca"
              label="Adres zameldowania"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_registered_address}
            />
            <DataLine
              type="phone"
              name="Telefon ojca"
              label="Telefon"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_phone}
            />
            <DataLine
              type="email"
              name="Email ojca"
              label="Email"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_email}
            />
            {errors.email && touched.email && errors.email}
            <DataLineArea
              type="text"
              name="Nazwa i adres zakładu pracy ojca"
              label="Nazwa i adres zakładu pracy"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_work_address}
            />
            <DataLine
              type="phone"
              name="Telefon do zakładu pracy ojca"
              label="Telefon do zakładu pracy"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.father_work_phone}
            />
          </FormSection>
          <FormSection title="Dane matki/opiekunki prawnej">
            <DataLine
              type="text"
              name="Imię matki"
              label="Imię"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_name}
            />
            <DataLine
              type="text"
              name="Nazwisko matki"
              label="Nazwisko"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_surname}
            />
            <DataLine
              type="text"
              name="Pesel matki"
              label="Pesel"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_pesel}
            />
            <DataLineArea
              type="text"
              name="Adres zameldowania matki"
              label="Adres zameldowania"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_registered_address}
            />
            <DataLine
              type="phone"
              name="Telefon matki"
              label="Telefon"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_phone}
            />
            <DataLine
              type="email"
              name="Email matki"
              label="Email"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_email}
            />
            {errors.email && touched.email && errors.email}
            <DataLineArea
              type="text"
              name="Nazwa i adres zakładu pracy matki"
              label="Nazwa i adres zakładu pracy"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_work_address}
            />
            <DataLine
              type="phone"
              name="Telefon do zakładu pracy matki"
              label="Telefon do zakładu pracy"
              OnChange={handleChange}
              onBlur={handleBlur}
              value={values.mother_work_phone}
            />
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
