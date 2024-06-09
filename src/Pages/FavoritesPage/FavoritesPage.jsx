import style from './FavoritesPage.module.css'
import { CamperList } from "../../components/CamperList/CamperList";

export const FavoritesPage = () => {
  return (
    <div className={style.wrapper}>
      <CamperList/>
    </div>
  );
};
