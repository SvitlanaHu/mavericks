import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export const NavBar = () => {
  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.btn} to="/catalog">
            <span>Catalog</span>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.btn} to="/favorite">
            <span>Favorite</span>
          </Link>
        </li>
        <li>
           <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};
