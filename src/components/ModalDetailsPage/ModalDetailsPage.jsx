import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { CamperRentForm } from "../CamperRentForm/CamperRentForm";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";
import { CamperDetailsInfo } from "../CamperDetailsInfo/CamperDetailsInfo";
import { CamperImgGallery } from "../CamperImgGallery/CamperImgGallery";
import { CamperReviews } from "../CamperReviews/CamperReviews";
import styles from "./ModalDetailsPage.module.css";

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
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.headerBlock}>
            <div className={styles.mainInfo}>
              <h3>{camper.name}</h3>
              <div className={styles.ratingLocation}>
                <div className={styles.ratingBlock}>
                  <svg className={styles.ratingSvg}>
                    <use href="/symbol-defs.svg#icon-rating"></use>
                  </svg>
                  <span className={styles.ratingText}>
                    {camper.rating}({reviewCount} Reviews)
                  </span>
                </div>
                <div className={styles.locationBlock}>
                  <svg className={styles.locationSvg}>
                    <use href="/symbol-defs.svg#icon-map-pin"></use>
                  </svg> 
                  <p className={styles.location}>
                    {city}, {country}
                  </p>
                </div>
              </div>
              <p className={styles.price}>€{camper.price},00</p>
            </div>
              <svg className={styles.closeButton}>
                <use href="/symbol-defs.svg#icon-close"></use>
              </svg> 
            </div>

          <div className={styles.detailedInfo}>
            <CamperImgGallery camper={camper} />
            <p className={styles.desc}>{camper.description}</p>
          </div>

          <div className={styles.featureReviews}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.chooseBtn} ${
                  activeTab === "features" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("features")}
              >
                Features
              </button>
              <button
                type="button"
                className={`${styles.chooseBtn} ${
                  activeTab === "reviews" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className={styles.moreInfo}>
              {activeTab === "features" && (
                <div className={styles.features}>
                  <CamperFeatures camper={camper} />
                  <CamperDetailsInfo camper={camper} />
                </div>
              )}
              {activeTab === "reviews" && (
                <div className={styles.reviews}>
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