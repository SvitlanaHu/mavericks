import PropTypes from 'prop-types';
import style from "./CamperReviewItem.module.css";

export const CamperReviewItem = ({ review }) => {
  const letter = review.reviewer_name.charAt(0);
  const rating = review.reviewer_rating;
  const stars = Array(5).fill(0);

  return (
    <div className={style.reviewBlock}>
      <div className={style.reviewerCont}>
        <div className={style.avatar}>
          <p>{letter}</p>
        </div>
        <div className={style.rating}>
          <span>{review.reviewer_name}</span>
          <div className={style.count}>
            {stars.map((_, index) => (
              <svg
                key={index}
                className={`${style.ratingSvg} ${
                  index < rating ? style.filled : ""
                }`}
              >
                <use href="/symbol-defs.svg#icon-rating"></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={style.reviewText}>{review.comment}</p>
    </div>
  );
};

CamperReviewItem.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string.isRequired,
    reviewer_rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
