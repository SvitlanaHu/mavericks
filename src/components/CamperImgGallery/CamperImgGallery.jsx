import PropTypes from 'prop-types';
import style from "./CamperImgGallery.module.css";

export const CamperImgGallery = ({ camper }) => {
  return (
    <ul className={style.imgList}>
      {camper.gallery.map((image, index) => (
        <li key={index} className={style.imgListItem}>
          <img
            src={image}
            alt={`Camper image ${index + 1}`}
            className={style.galleryImage}
          />
        </li>
      ))}
    </ul>
  );
};

CamperImgGallery.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};