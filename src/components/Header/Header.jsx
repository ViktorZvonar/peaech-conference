import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logos/logo_znak_2022.png';
import logo2 from '../../images/logos/EN-V-Co-funded-by_POS.png';
import logo3 from '../../images/logos/jean-monnet-logo-300x108.png';
import logo4 from '../../images/logos/PeaECH_fin_logo.png';

import styles from './Header.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <img
          src={logo1}
          alt="Logo 1"
          className={`${styles.logo1} ${styles.logo}`}
        />

        <img
          src={logo2}
          alt="Logo 2"
          className={`${styles.logo2} ${styles.logo}`}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/speakers" className={getClassName}>
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getClassName}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logos}>
        <img
          src={logo3}
          alt="Logo 3"
          className={`${styles.logo3} ${styles.logo}`}
        />
        <img
          src={logo4}
          alt="Logo 4"
          className={`${styles.logo4} ${styles.logo}`}
        />
      </div>
    </header>
  );
}

export default Header;
