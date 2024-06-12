import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextTruncate.module.css';

const TextTruncate = ({ descr }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.textContainer}>
      <p className={`${styles.text} ${isExpanded ? styles.expanded : styles.clamped}`}>
        {descr}
      </p>
      <button onClick={toggleExpansion} className={styles.toggleButton}>
        {isExpanded ? 'Show less' : '...Show more'}
      </button>
    </div>
  );
};

TextTruncate.propTypes = {
  descr: PropTypes.string.isRequired,
};

export default TextTruncate;
