import PropTypes from 'prop-types';
import style from "./CamperFeatures.module.css";

import { TbAutomaticGearbox } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { IoMdRadio } from "react-icons/io";
import { TbCooker } from "react-icons/tb";
import { TbFridge } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { MdMicrowave } from "react-icons/md";

export const CamperFeatures = ({ camper }) => {
  return (
    <ul className={style.advList}>
      {camper.adults && (
        <li className={style.adItem}>
          <svg className={style.icon}>
            <use href="/symbol-defs.svg#icon-Users"></use>
          </svg>{" "}
          {camper.adults} adults
        </li>
      )}

      {camper.transmission && (
        <li className={style.adItem}>
          <TbAutomaticGearbox className={style.icon} />
          <p>{camper.transmission}</p>
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={style.adItem}>
          <FaWind className={style.icon} />
          <p>AC</p>
        </li>
      )}

      {camper.engine && (
        <li className={style.adItem}>
          <MdOutlineLocalGasStation className={style.icon} />
          {camper.engine}
        </li>
      )}

      {camper.details.kitchen > 0 && (
        <li className={style.adItem}>
          <TbToolsKitchen2 className={style.icon} /> Kitchen
        </li>
      )}

      {camper.details.beds > 0 && (
        <li className={style.adItem}>
          <IoBedOutline className={style.icon} />
          {camper.details.beds} beds
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={style.adItem}>
          <TbAirConditioning className={style.icon} />
          {camper.details.airConditioner} airConditioner
        </li>
      )}

      {camper.details.CD > 0 && (
        <li className={style.adItem}>
          <LiaCompactDiscSolid className={style.icon} /> CD
        </li>
      )}

      {camper.details.radio > 0 && (
        <li className={style.adItem}>
          <IoMdRadio className={style.icon} />
          Radio
        </li>
      )}

      {camper.details.hob > 0 && (
        <li className={style.adItem}>
          <TbCooker className={style.icon} />
          {camper.details.hob} hob
        </li>
      )}

      {camper.details.freezer > 0 && (
        <li className={style.adItem}>
          <TbFridge className={style.icon} /> freezer
        </li>
      )}

      {camper.details.TV > 0 && (
        <li className={style.adItem}>
          <PiTelevisionSimple className={style.icon} /> TV
        </li>
      )}

      {camper.details.bathroom > 0 && (
        <li className={style.adItem}>
          <LuShowerHead className={style.icon} /> Bathroom
        </li>
      )}

      {camper.details.microwave > 0 && (
        <li className={style.adItem}>
          <MdMicrowave className={style.icon} /> Microwave
        </li>
      )}
    </ul>
  );
};

CamperFeatures.propTypes = {
  camper: PropTypes.shape({
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    details: PropTypes.shape({
      airConditioner: PropTypes.number,
      kitchen: PropTypes.number,
      beds: PropTypes.number,
      CD: PropTypes.number,
      radio: PropTypes.number,
      hob: PropTypes.number,
      freezer: PropTypes.number,
      TV: PropTypes.number,
      bathroom: PropTypes.number,
      microwave: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
