import React from 'react';
import styles from './Speakers.module.css';
import SpeakerPerson from './SpeakerPerson/SpeakerPerson';

function Speakers() {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.h1}>Meet our Keynote Speakers</h1>
        <p className={styles.p}>
          We have invited speakers from various fields of expertise
        </p>
      </section>
      <section className={styles.speakersContainer}>
        <SpeakerPerson />
      </section>
    </div>
  );
}

export default Speakers;
