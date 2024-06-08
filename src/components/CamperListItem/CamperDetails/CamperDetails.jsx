/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./CamperDetails.module.css";
import icons from "../../../images/sprite.svg";
import { Features } from "./Features/Features";

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
            <h2>€{camper.price}</h2>
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
          
          <svg className={style.svg} width="16" height="16">
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
          <span>{camper.location}</span>
        </div>
      </div>        
        <p className={style.description}>{camper.description}</p>
        <Features camper={camper} />      
    </div>
  );
};
