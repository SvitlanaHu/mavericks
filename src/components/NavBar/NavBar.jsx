import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import style from "./NavBar.module.css";
import { selectFavoritesIDs } from "../../Redux/selectors";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const NavBar = () => {
  const favoriteTipRef = useRef(null);
  const favoriteCount = useSelector(selectFavoritesIDs);

  useEffect(() => {
    if (favoriteTipRef.current) {
      favoriteTipRef.current.setAttribute(
        "data-favorite-count",
        favoriteCount.length ? `+${favoriteCount.length}` : ''
      );
    }
  }, [favoriteCount]);

  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        <li key={nanoid()} className={style.listItem}>
          <NavLink className={buildLinkClass} to="/catalog">
            <span>Catalog</span>
          </NavLink>
        </li>
        <li key={nanoid()} className={style.listItem}>
          <NavLink className={buildLinkClass} to="/favorite">
            <span>Favorite</span>
          </NavLink>
        </li>
        <li>
           <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};
