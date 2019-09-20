import React from 'react';
import Footer from './Footer';
import Header from './Header';

import layoutStyles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.page}>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
