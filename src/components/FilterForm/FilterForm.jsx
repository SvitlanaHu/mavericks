import { nanoid } from "nanoid";
import style from "./FilterForm.module.css";

export const FilterForm = () => {
  return (
    <div className={style.wrapper}>
      <form>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="locationInput">Location</label>
          <input type="text" name="locationInput" id="locationInput" className={style.locatonInput}/>
        </div>
        <label htmlFor="">Filters</label>
        <h3>Vehicle equipment</h3>
        <div className={style.formGroup}>
          <ul>
            <li>
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
