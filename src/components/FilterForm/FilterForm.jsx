
import { useDispatch } from "react-redux";
import style from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";
import { resetFilters, setFilters } from "../../Redux/camperSlice";

export const FilterForm = () => {  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target.form);
    const location = form.get("locationInput") || undefined;
    const checkBoxValue = Array.from(form.getAll("equipment"));
    const radioBoxValue = form.get("form");

    dispatch(
      setFilters({
        location,
        details: checkBoxValue,
        camperType: radioBoxValue,
      })
    );
  };

  const handleChangeCheckBox = (event) => {
    event.currentTarget.classList.toggle(style.checked);
  };

  const resetRadio = () => {
    ["radio11", "radio21", "radio31"].forEach((id) => {
      document.getElementById(id).classList.remove(style.checked);
    });
  };

  const handleChangeRadio = (event) => {
    resetRadio();
    event.currentTarget.classList.add(style.checked);
  };

   const handleResetFilters = () => {
    dispatch(resetFilters());
    document.getElementById("locationInput").value = "";
    document.querySelectorAll(`.${style.checked}`).forEach((element) => {
      element.classList.remove(style.checked);
    });
    resetRadio();
  };

  const equipmentGroup1 = ["AC", "Bathroom", "Toilet"];
  const equipmentGroup2 = ["Kitchen", "TV", "CD", "Radio", "Shower", "Water", "Freezer", "Conditioner", "Microwave"];

  return (
    <div className={style.wrapper}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
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
          <label>Filters</label>
          <h3 className={style.title}>Vehicle equipment</h3>
          <ul>
            {equipmentGroup1.map((item, index) => (
              <li key={`group1-checkbox-${item}`}>
                <label className={style.label}>
                  <svg className={style.iconFill} width="32" height="32">
                    <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                  </svg>
                  {item}
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox1-${index}`}
                    onChange={handleChangeCheckBox}
                  />
                </label>
              </li>
            ))}
            {equipmentGroup2.map((item, index) => (
              <li key={`group2-checkbox-${item}`}>
                <label className={style.label}>
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                  </svg>
                  {item}
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox2-${index}`}
                    onChange={handleChangeCheckBox}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.formGroup}>
            <h3>Vehicle type</h3>
          <ul>
            {[
              { id: "radio11", label: "Alcove", value: "Alcove", icon: "camper-alcove" },
              { id: "radio21", label: "Fully Integrated", value: "fullyIntegrated", icon: "camper-fully-int" },
              { id: "radio31", label: "Van", value: "panelTruck", icon: "camper-van" },
            ].map((radio, index) => (
              <li key={`radio-${radio.id}`}>
                <label className={style.label}>
                  <div
                    className={style.radioBox}
                    onClick={handleChangeRadio}
                    id={radio.id}
                  >
                    <svg className={style.iconFill} width="32" height="32">
                      <use href={`${icons}#icon-${radio.icon}`}></use>
                    </svg>
                    {radio.label}
                  </div>
                </label>
                <input
                  type="radio"
                  name="form"
                  value={radio.value}
                  id={`radio-input-${index}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={style.btnContainer}>
          <button
            className={style.btn}
            type="submit"
          >
            Search
          </button>
          <p className={style.resetFilters} onClick={handleResetFilters}>
            Reset filters?
          </p>
        </div>
      </form>
    </div>
  );
};