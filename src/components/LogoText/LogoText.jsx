import { useEffect, forwardRef } from "react";
import style from "./LogoText.module.css";

export const LogoText = forwardRef((props, ref) => {

  useEffect(() => {
    const tId = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add(style.moved);
      }
    }, 2500);

    return () => {
      clearTimeout(tId);
    };
  }, [ref]);

  return (
    <h2 ref={ref} className={style.logoText}>
      RENTAL<span className={style.spanOf}>of</span><span className={style.spanCamper}>CAMPER</span>
    </h2>
  );
});

LogoText.displayName = "LogoText";
