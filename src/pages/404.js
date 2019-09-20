import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/Head';

import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Head title='404 Not Found' />

      <h1>Page not found</h1>
      <p>
        <Link to='/'>Go home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
