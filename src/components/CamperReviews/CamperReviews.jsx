import PropTypes from 'prop-types';
import { CamperReviewItem } from "../CamperReviewItem/CamperReviewItem";
import style from "./CamperReviews.module.css";

export const CamperReviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul className={style.container}>
      {reviews.map((review, index) => (
        <CamperReviewItem key={index} review={review} />
      ))}
    </ul>
  );
};

CamperReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
