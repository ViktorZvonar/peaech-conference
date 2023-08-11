import React from 'react';
import styles from './Home.module.css';
import Moderators from 'components/Moderators/Moderators';

function Home() {
  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>
          PEACE EDUCATION FOR CONSOLIDATED AND HUMAN-CENTERED EUROPE 2023
        </h1>
        <p className={styles.p}>JUNE 16, 2023</p>
        <p className={styles.p}>
          ALL-UKRAINIAN SCIENTIFIC AND PRACTICAL ONLINE CONFERENCE
        </p>
      </section>

      <section className={styles.secondSection}>
        <p className={styles.about}>
          The conference is held within the framework of the Erasmus+ project
          Jean Monnet module "Peace education for consolidated and
          human-centered Europe", financed by the European Union
          (ERASMUS-JMO-2022-HEI-TCH-RSCH-UA-IBA- 101094420).
        </p>
      </section>
      <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Moderators</h2>
        <Moderators />
      </section>
    </main>
  );
}

export default Home;
