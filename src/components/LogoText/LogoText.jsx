import { useEffect, useRef } from "react";
import style from "./LogoText.module.css";

export const LogoText = () => {
  const logoText = useRef(null);

  useEffect(() => {
    const tId = setTimeout(() => {
      logoText.current.classList.add(style.moved);
    }, 2500);

    return () => {
      clearTimeout(tId);
    };
  }, []);

  return (
    <h2 ref={logoText} className={style.logoText}>
      RENTALof<span className={style.span}>CAMPER</span>
    </h2>
  );
};
