import PropTypes from "prop-types";
import styles from "./CamperListItem.module.css";

import { HeroImage } from "../HeroImage/HeroImage";
import { CamperDetails } from "../CamperDetails/CamperDetails";

export const CamperListItem = ({ camper }) => {
  return (
    <div className={styles.wrapper}>
      <HeroImage image={camper.gallery[0]} />
      <div className={styles.content}>
        <CamperDetails camper={camper} />
        <button className={styles.btn} type="button">Show more</button>
      </div>      
    </div>
  );
};

CamperListItem.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,    
  }).isRequired,
};
