import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './Footer.module.scss';
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className={footerStyles.footer}>
      <p>Copyright {data.site.siteMetadata.author}, 2019</p>
    </div>
  );
};

export default Footer;
