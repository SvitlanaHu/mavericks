import PropTypes from 'prop-types';
import style from "./CamperDetailsInfo.module.css";

export const CamperDetailsInfo = ({ camper }) => {
  function formatStringValue(value) {
    return value.replace(/(\d+)([a-zA-Z])/g, "$1 $2");
  }

  return (
    <div className={style.details}>
      <h3 className={style.subTitle}>Vehicle details</h3>
      <hr className={style.line} />
      <ul className={style.detailsList}>
        <li className={style.detailsItem}>
          <span>Form</span>
          <span style={{ textTransform: "capitalize" }}>{camper.form}</span>
        </li>
        <li className={style.detailsItem}>
          <span>Length</span>
          <span>{formatStringValue(camper.length)}</span>
        </li>
        <li className={style.detailsItem}>
          <span>Width</span>
          <span>{formatStringValue(camper.width)}</span>
        </li>
        <li className={style.detailsItem}>
          <span>Height</span>
          <span>{formatStringValue(camper.height)}</span>
        </li>
        <li className={style.detailsItem}>
          <span>Tank</span>
          <span>{formatStringValue(camper.tank)}</span>
        </li>
        <li className={style.detailsItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

CamperDetailsInfo.propTypes = {
  camper: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
  }).isRequired,
};
