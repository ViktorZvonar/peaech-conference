import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logos/logo_znak_2022.png';
import logo2 from '../../images/logos/EN-V-Co-funded-by_POS.png';
import logo3 from '../../images/logos/jean-monnet-logo-300x108.png';
import logo4 from '../../images/logos/PeaECH_fin_logo.png';

import styles from './Header.module.css';
import { useMedia } from '../../hooks/useMedia';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isBetweenWidths481And1279 = useMedia(
    ['(min-width: 481px) and (max-width: 1279px)'],
    [true],
    false
  );
  const isFromWidth1280 = useMedia(['(min-width: 1280px)'], [true], false);
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  return (
    <header className={styles.header}>
      {dropdownOpen && (
        <div
          className={`${styles.backdrop} ${
            dropdownOpen ? styles.activeBackdrop : ''
          }`}
          onClick={() => setDropdownOpen(false)} // Close the dropdown when backdrop is clicked
        ></div>
      )}
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
        {isFromWidth1280 && (
          <div className={styles.naContent}>
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
            <NavLink to="/speakers" className={getClassName}>
              Speakers
            </NavLink>
            <NavLink to="/proceedings" className={getClassName}>
              Proceedings
            </NavLink>
          </div>
        )}
        {isUpToWidth480 && (
          <li
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.burgerMenuIcon} ${styles.link}`}
          >
            ☰
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <NavLink to="/" className={getClassName}>
                  Home
                </NavLink>
                <NavLink to="/speakers" className={getClassName}>
                  Speakers
                </NavLink>
                <NavLink to="/proceedings" className={getClassName}>
                  Proceedings
                </NavLink>
              </div>
            )}
          </li>
        )}
        {isBetweenWidths481And1279 && (
          <li
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.menuDropdown} ${styles.link}`}
          >
            Menu
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <NavLink to="/" className={getClassName}>
                  Home
                </NavLink>
                <NavLink to="/speakers" className={getClassName}>
                  Speakers
                </NavLink>
                <NavLink to="/proceedings" className={getClassName}>
                  Proceedings
                </NavLink>
              </div>
            )}
          </li>
        )}
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
