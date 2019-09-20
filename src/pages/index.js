import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

import Head from '../components/Head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home' />
      <h1>Welcome To My Page</h1>
      <p>
        Would you like to use me? <Link to='/contact'>Contact me here!</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
