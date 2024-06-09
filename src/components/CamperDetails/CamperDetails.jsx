import { useState } from "react";
import PropTypes from 'prop-types';
import style from "./CamperDetails.module.css";
import icons from "../../images/sprite.svg";
import { Features } from "../Features/Features";
import DisplayNumber from '../DisplayNumber/DisplayNumber';

export const CamperDetails = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    // Додайте код для додавання/видалення з обраних, якщо потрібно
  };

  return (
    <div className={style.details}>
      <div className={style.titleBox}>
        <div className={style.title}>
          <h2>{camper.name}</h2>
          <div className={style.priceBox}>
            <h2 className={style.price}>€<DisplayNumber number={camper.price} /></h2>
            <svg
              className={`${style.svgHeart} ${isFavorite ? style.favorite : ""}`}
              width="22"
              height="22"
              onClick={toggleFavorite}
            >
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </div>        
        </div>
        <div className={style.ratingContainer}>
          <div className={style.ratingBox}>
            <svg className={style.svgRating} width="16" height="16">
              <use href={`${icons}#icon-RatingStar`}></use>
            </svg>
            <p>
              {camper.reviews && camper.reviews.length > 0 ? (
               <>
                  {camper.reviews.reduce((acc, review) => {
                    return acc + review.reviewer_rating;
                  }, 0) / camper.reviews.length}
                  ({camper.reviews.length} Reviews)
                </>
              ) : (
                "No Reviews"
              )}
            </p>
          </div>
          <div className={style.ratingBox}>
            <svg className={style.svgMap} width="16" height="16">
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            <span>{camper.location}</span>
          </div>          
        </div>
      </div>        
      <p className={style.description}>{camper.description}</p>
      <Features camper={camper} />      
    </div>
  );
};

CamperDetails.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_rating: PropTypes.number.isRequired,
      })
    ),
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    details: PropTypes.shape({
      beds: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
