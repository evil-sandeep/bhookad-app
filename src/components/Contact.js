import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length > 30) {
    errors.fullName = 'Must be 30 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 500) {
    errors.message = 'Must be 500 characters or less';
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto ">
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm   font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className="mt-1 p-2 w-full border rounded-md shadow-lg"
        />
        {formik.errors.fullName ? <div className="text-red-500">{formik.errors.fullName}</div> : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mt-1 p-2 w-full border rounded-md shadow-lg"
        />
        {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="mt-1 p-2 w-full border rounded-md shadow-lg"
        />
        {formik.errors.message ? <div className="text-red-500">{formik.errors.message}</div> : null}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 shadow-md"
      >
        Submit
      </button>
    </form>
    <div className="p-8 cursor-pointer">

  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

    <div className="flex flex-row  mb-4">
      <div className="flex items-center mb-2">
        <svg
          className="w-6 h-6 mr-3 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        <p className="text-gray-700 mr-36">Chandikhol, Jajpur, Odisha,754296, India</p>
      </div>

      <div className="flex items-center mb-2">
        <svg
          className="w-6 h-6 mr-3 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
            
          ></path>
        </svg>
        <p className="text-gray-700 mr-60">chandansandeep2000@gmail.com</p>
      </div>

      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-3 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        <p className="text-gray-700">+ 91 9078996315</p>
      </div>
      
    </div>
  </div>
</div>

   
   
    </>
  );
};

export default ContactForm;
