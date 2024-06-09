import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import style from "./Features.module.css";
import icons from "../../images/sprite.svg";

export const Features = ({ camper }) => {
  return (
    <ul className={style.wrapper} >
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svgFill} width="20" height="20">
          <use href={`${icons}#icon-Users`}></use>
        </svg>
        <p className={style.featureName}>{camper.adults} adults</p>
      </li>
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-gears`}></use>
        </svg>
        <p className={style.featureName}>{camper.transmission}</p>
      </li>
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svgFill} width="20" height="20">
          <use href={`${icons}#icon-fuel`}></use>
        </svg>
        <p className={style.featureName}>{camper.engine}</p>
      </li>
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-forkKnife`}></use>
        </svg>
        <p className={style.featureName}>Kitchen</p>
      </li>
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-bad`}></use>
        </svg>
        <p className={style.featureName}>{camper.details.beds} beds</p>
      </li>
      <li className={style.featureBox} key={nanoid()}>
        <svg className={style.svgFill} width="20" height="20">
          <use href={`${icons}#icon-AC`}></use>
        </svg>
        <p className={style.featureName}>AC</p>
      </li>
    </ul>
  );
};

Features.propTypes = {
  camper: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    details: PropTypes.shape({
      beds: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};