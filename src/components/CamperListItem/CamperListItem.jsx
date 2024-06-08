import PropTypes from "prop-types";
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";

export const CamperListItem = ({ camper }) => {
  return (
    <div className={style.wrapper}>
      <HeroImage image={camper.gallery[0]} />
      <div className={style.content}>
        <CamperDetails camper={camper} />
        <button type="button">Show more</button>
      </div>      
    </div>
  );
};

CamperListItem.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,    
  }).isRequired,
};
