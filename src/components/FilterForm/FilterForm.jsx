import { nanoid } from "nanoid";
import style from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";

export const FilterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = Array.from(event.target.form.elements);

    const location = form[0].value.length ? form[0].value : null;

    const checkBoxValue = [];
    form.map((checkBox) => {
      if (checkBox.name === "equipment" && checkBox.checked) {
        checkBoxValue.push(checkBox.value);
      }
    });

    const radioBoxValue = form.find(
      (radio) =>
        radio.type === "radio" && radio.name === "form" && radio.checked
    ).value;

    console.log(location);
    console.log(checkBoxValue);
    console.log(radioBoxValue);
  };

  const handleChangeCheckBox = (event) => {
    event.currentTarget.classList.toggle(style.checked);
  };

  const handleChangeRadio = (event) => {
    document.getElementById("radio11").classList.remove(style.checked);
    document.getElementById("radio21").classList.remove(style.checked);
    document.getElementById("radio31").classList.remove(style.checked);
    event.currentTarget.classList.add(style.checked);
  };

  return (
    <div className={style.wrapper}>
      <form className={style.formContainer}>
        <div className={style.formlocalGroup}>
          <label className={style.label} htmlFor="locationInput">Location</label>
          <input
            type="text"
            name="locationInput"
            placeholder="Kyiv, Ukraine"
            id="locationInput"
            className={style.locatonInput}
          />
          <svg className={style.iconMap} width="20" height="22">
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="">Filters</label>
          <h3 className={style.title}>Vehicle equipment</h3>
          <ul>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-AC`}></use>
                  </svg>
                AC
                <input
                  type="checkbox"
                  name="equipment"
                  value="airConditioner"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                Bathroom
                <input
                  type="checkbox"
                  name="equipment"
                  value="bathroom"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-forkKnife`}></use>
                  </svg>
                Kitchen
                <input
                  type="checkbox"
                  name="equipment"
                  value="kitchen"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-tv`}></use>
                  </svg>
                TV
                <input
                  type="checkbox"
                  name="equipment"
                  value="TV"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-cd`}></use>
                  </svg>
                CD
                <input
                  type="checkbox"
                  name="equipment"
                  value="CD"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-radio`}></use>
                  </svg>
                Radio
                <input
                  type="checkbox"
                  name="equipment"
                  value="radio"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-shower`}></use>
                  </svg>
                Shower
                <input
                  type="checkbox"
                  name="equipment"
                  value="shower"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-toilet`}></use>
                  </svg>
                Toilet
                <input
                  type="checkbox"
                  name="equipment"
                  value="toilet"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-water`}></use>
                  </svg>
                Water
                <input
                  type="checkbox"
                  name="equipment"
                  value="toilet"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-freezer`}></use>
                  </svg>
                Freezer
                <input
                  type="checkbox"
                  name="equipment"
                  value="freezer"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-conditioner`}></use>
                  </svg>
                Conditioner
                <input
                  type="checkbox"
                  name="equipment"
                  value="freezer"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-microwave`}></use>
                  </svg>
                Microwave
                <input
                  type="checkbox"
                  name="equipment"
                  value="microwave"
                  id={nanoid()}
                />
              </label>
            </li>
          </ul>
        </div>
        <div className={style.formGroup}>
            <h3>Vihicle type</h3>
          <ul>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-alcove`}></use>
                  </svg>
                Alcove
                <input
                  type="checkbox"
                  name="form"
                  value="Alcove"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-fully-Int`}></use>
                  </svg>
                Fully Integrated
                <input
                  type="checkbox"
                  name="form"
                  value="fullyIntegrated"
                  id={nanoid()}
                />
              </label>
            </li>
            <li>
              <label className={style.label}>
                <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-van`}></use>
                  </svg>
                Van
                <input
                  type="checkbox"
                  name="form"
                  value="panelTruck"
                  id={nanoid()}
                />
              </label>
            </li>
          </ul>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};
