import React from 'react';
import speakersData from '../../../data/speakers.json';
import styles from './SpeakerPerson.module.css';

function SpeakerPerson() {
  return speakersData.map(speaker => (
    <div key={speaker.id} className={styles.speakerCard}>
      <img
        className={styles.speakerImage}
        src={process.env.PUBLIC_URL + speaker.photo}
        alt={speaker.name}
      />
      <div className={styles.speakerName}>{speaker.name}</div>
      <div className={styles.speakerTitle}>{speaker.title}</div>
    </div>
  ));
}

export default SpeakerPerson;
