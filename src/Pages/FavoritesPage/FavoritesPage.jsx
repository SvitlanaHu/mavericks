import { Outlet } from "react-router-dom";
import style from './FavoritesPage.module.css'
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { CamperList } from "../../components/CamperList/CamperList";

export const FavoritesPage = () => {
  return (
    <div className={style.wrapper}>
      <aside>
        <FilterBar/>
      </aside>
      <Outlet/>
      <CamperList/>
    </div>
  );
};
