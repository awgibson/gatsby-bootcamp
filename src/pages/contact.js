import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <h1>How To Contact Me</h1>
      <h4>Email</h4>
      <p>test@test.com</p>
      <h4>Phone</h4>
      <p>555-555-5555</p>
    </Layout>
  );
};

export default ContactPage;
