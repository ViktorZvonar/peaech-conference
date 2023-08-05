import React from 'react';
import moderatorsData from '../../../data/moderators.json';
import styles from './ModeratorPerson.module.css';

function ModeratorPerson() {
  return moderatorsData.map(moderator => (
    <figure key={moderator.id} className={styles.moderatorCard}>
      <img
        className={styles.moderatorImage}
        src={process.env.PUBLIC_URL + moderator.photo}
        alt={moderator.name}
      />
      <figcaption className={styles.moderatorText}>
        <p className={styles.moderatorName}>{moderator.name}</p>
        <p className={styles.moderatorTitle}>{moderator.title}</p>
      </figcaption>
    </figure>
  ));
}

export default ModeratorPerson;
