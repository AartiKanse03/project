import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    message: Yup.string()
      .max(500, 'Must be 500 characters or less')
      .required('Required'),
  });

  const sendEmail = (values) => {
    emailjs.send('service_ccm0827', 'template_q9ku5a6', values, 'nYTeBmBa9_1JnzHb3')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendEmail(values);
              resetForm(); // Reset form after submission
            }}
          >
            {() => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" id="message" name="message" rows="5" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>
                <button type="submit">Send Message</button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.658637888399!2d-122.08424938469173!3d37.42199977982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6b00efc7af7%3A0x2e12e1b54729d81e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633490789366!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
