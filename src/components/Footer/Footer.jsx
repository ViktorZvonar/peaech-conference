import React from 'react';
import logo1 from '../../images/logos/EN-Co-Funded-by-the-EU_POS.png';
import logo2 from '../../images/logos/kubg_logo_gor_en.png';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <img src={logo1} alt="Logo 1" className={styles.logo1} />
        <img src={logo2} alt="Logo 2" className={styles.logo2} />
      </div>
      <p className={styles.disclaimer}>
        Funded by the European Union. Views and opinions expressed are however
        those of the author(s) only and do not necessarily reflect those of the
        European Union or the European Education and Culture Executive Agency
        (EACEA). Neither the European Union nor the granting authority can be
        held responsible for them.
      </p>
    </footer>
  );
}

export default Footer;
