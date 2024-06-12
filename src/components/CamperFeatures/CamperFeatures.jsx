import PropTypes from 'prop-types';
import styles from "./CamperFeatures.module.css";

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
    <ul className={styles.advList}>
      {camper.adults && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href="/symbol-defs.svg#icon-Users"></use>
          </svg>{" "}
          {camper.adults} adults
        </li>
      )}

      {camper.transmission && (
        <li className={styles.adItem}>
          <TbAutomaticGearbox className={styles.icon} />
          <p>{camper.transmission}</p>
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={styles.adItem}>
          <FaWind className={styles.icon} />
          <p>AC</p>
        </li>
      )}

      {camper.engine && (
        <li className={styles.adItem}>
          <MdOutlineLocalGasStation className={styles.icon} />
          {camper.engine}
        </li>
      )}

      {camper.details.kitchen > 0 && (
        <li className={styles.adItem}>
          <TbToolsKitchen2 className={styles.icon} /> Kitchen
        </li>
      )}

      {camper.details.beds > 0 && (
        <li className={styles.adItem}>
          <IoBedOutline className={styles.icon} />
          {camper.details.beds} beds
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={styles.adItem}>
          <TbAirConditioning className={styles.icon} />
          {camper.details.airConditioner} airConditioner
        </li>
      )}

      {camper.details.CD > 0 && (
        <li className={styles.adItem}>
          <LiaCompactDiscSolid className={styles.icon} /> CD
        </li>
      )}

      {camper.details.radio > 0 && (
        <li className={styles.adItem}>
          <IoMdRadio className={styles.icon} />
          Radio
        </li>
      )}

      {camper.details.hob > 0 && (
        <li className={styles.adItem}>
          <TbCooker className={styles.icon} />
          {camper.details.hob} hob
        </li>
      )}

      {camper.details.freezer > 0 && (
        <li className={styles.adItem}>
          <TbFridge className={styles.icon} /> freezer
        </li>
      )}

      {camper.details.TV > 0 && (
        <li className={styles.adItem}>
          <PiTelevisionSimple className={styles.icon} /> TV
        </li>
      )}

      {camper.details.bathroom > 0 && (
        <li className={styles.adItem}>
          <LuShowerHead className={styles.icon} /> Bathroom
        </li>
      )}

      {camper.details.microwave > 0 && (
        <li className={styles.adItem}>
          <MdMicrowave className={styles.icon} /> Microwave
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
