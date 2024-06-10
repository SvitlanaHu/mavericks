import { Outlet } from "react-router-dom";
import style from './SharedStyles.module.css';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CamperList } from "../components/CamperList/CamperList";

export const CatalogPage = () => {
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
