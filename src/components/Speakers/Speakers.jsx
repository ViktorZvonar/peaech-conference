import React from 'react';
import styles from './Speakers.module.css';
import SpeakerPerson from './SpeakerPerson/SpeakerPerson';

function Speakers() {
  return (
    <main>
      <section className={styles.section} tabIndex="0">
        <h1 className={styles.h1}>Meet our Keynote Speakers</h1>
        <p className={styles.p}>
          We have invited prominent speakers from various fields of expertise...
        </p>
        <p className={`${styles.p} ${styles.additionalInfo}`}>
          ...for high-level discussion and inspiring insights!
        </p>
      </section>
      <section className={styles.speakersContainer}>
        <SpeakerPerson />
      </section>
    </main>
  );
}

export default Speakers;
