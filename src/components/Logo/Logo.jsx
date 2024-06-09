import { Link } from "react-router-dom";
import logo from "../../images/camper.svg";
import style from "./Logo.module.css";
import { useEffect, useRef } from "react";
import { LogoText } from "../LogoText/LogoText";

export const Logo = () => {
  const logoBtn = useRef(null);
  const logoText = useRef(null);

  useEffect(() => {
    logoBtn.current.classList.add(style.show);
    logoText.current.classList.add(style.moved);
  }, []);

  const handleMouseEnter = () => {
    logoText.current.classList.add(style.shadow);
  };

  const handleMouseLeave = () => {
    logoText.current.classList.remove(style.shadow);
  };

  return (
    <div className={style.wrapper}>
      <Link
        to="/"
        className={style.link}
        ref={logoBtn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={logo}
          alt="Logo of the company"
          className={style.logo}
        />
      </Link>

      <Link to="/">
        <LogoText ref={logoText} />
      </Link>
    </div>
  );
};
