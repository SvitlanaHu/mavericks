/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import style from "./Features.module.css";
import icons from "../../../../images/sprite.svg";

export const Features = ({ count = 5, camper }) => {
  return (
    <ul>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-Users`}></use>
        </svg>
        <p className={style.featureName}>{camper.adults} adults</p>
      </li>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-gears`}></use>
        </svg>
        <p className={style.featureName}>{camper.transmission}</p>
      </li>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-fuel`}></use>
        </svg>
        <p className={style.featureName}>{camper.engine}</p>
      </li>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-forkKnife`}></use>
        </svg>
        <p className={style.featureName}>Kitchen</p>
      </li>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-bad`}></use>
        </svg>
        <p className={style.featureName}>{camper.details.beds} beds</p>
      </li>
      <li key={nanoid()}>
        <svg className={style.svg} width="20" height="20">
          <use href={`${icons}#icon-AC`}></use>
        </svg>
        <p className={style.featureName}>AC</p>
      </li>
    </ul>
  );
};
