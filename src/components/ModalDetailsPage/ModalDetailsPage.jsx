import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { CamperRentForm } from "../CamperRentForm/CamperRentForm";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";
import { CamperDetailsInfo } from "../CamperDetailsInfo/CamperDetailsInfo";
import { CamperImgGallery } from "../CamperImgGallery/CamperImgGallery";
import { CamperReviews } from "../CamperReviews/CamperReviews";
import style from "./ModalDetailsPage.module.css";

export const ModalDetailsPage = ({ camper, onClose, reviewCount, city, country }) => {
  const [activeTab, setActiveTab] = useState("features");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.headerBlock}>
            <div className={style.mainInfo}>
              <h3>{camper.name}</h3>
              <div className={style.ratingLocation}>
                <div className={style.ratingBlock}>
                  <svg className={style.ratingSvg}>
                    <use href="/symbol-defs.svg#icon-rating"></use>
                  </svg>
                  <span className={style.ratingText}>
                    {camper.rating}({reviewCount} Reviews)
                  </span>
                </div>
                <div className={style.locationBlock}>
                  <svg className={style.locationSvg}>
                    <use href="/symbol-defs.svg#icon-map-pin"></use>
                  </svg> 
                  <p className={style.location}>
                    {city}, {country}
                  </p>
                </div>
              </div>
              <p className={style.price}>€{camper.price},00</p>
            </div>
              <svg className={style.closeButton}>
                <use href="/symbol-defs.svg#icon-close"></use>
              </svg> 
            </div>

          <div className={style.detailedInfo}>
            <CamperImgGallery camper={camper} />
            <p className={style.desc}>{camper.description}</p>
          </div>

          <div className={style.featureReviews}>
            <div className={style.tabs}>
              <button
                type="button"
                className={`${style.chooseBtn} ${
                  activeTab === "features" ? style.active : ""
                }`}
                onClick={() => handleTabChange("features")}
              >
                Features
              </button>
              <button
                type="button"
                className={`${style.chooseBtn} ${
                  activeTab === "reviews" ? style.active : ""
                }`}
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className={style.moreInfo}>
              {activeTab === "features" && (
                <div className={style.features}>
                  <CamperFeatures camper={camper} />
                  <CamperDetailsInfo camper={camper} />
                </div>
              )}
              {activeTab === "reviews" && (
                <div className={style.reviews}>
                  <CamperReviews reviews={camper.reviews} />
                </div>
              )}

              <CamperRentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDetailsPage.propTypes = {
  camper: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  reviewCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};