import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './Header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={headerStyles.header}>
      <Link to='/' className={headerStyles.title}>
        {data.site.siteMetadata.title}
      </Link>
      <ul>
        <li>
          <Link to='/' activeClassName={headerStyles.activeNavItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' activeClassName={headerStyles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link to='/blog' activeClassName={headerStyles.activeNavItem}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' activeClassName={headerStyles.activeNavItem}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
