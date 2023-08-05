import React from 'react';
import styles from './Moderators.module.css';
import ModeratorPerson from './ModeratorPerson/ModeratorPerson';

function Moderators() {
  return (
    <div className={styles.moderatorsContainer}>
      <ModeratorPerson />
    </div>
  );
}

export default Moderators;
