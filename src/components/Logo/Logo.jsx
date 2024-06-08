import { Link } from "react-router-dom";
import logo from "../../images/camper.svg";
import style from "./Logo.module.css";
import { useEffect, useRef } from "react";
import { LogoText } from "../LogoText/LogoText";

export const Logo = () => {
  const logoBtn = useRef(null);

  useEffect(() => {
    logoBtn.current.classList.add(style.show);
  }, []);

  return (
    <div className={style.wrapper}>
      <Link to="/" className={style.link} ref={logoBtn}>
        <img src={logo} alt="Logo of the company" className={style.logo} />
      </Link>
      <Link to="/">
      <LogoText />
      </Link>
    </div>
  );
};
