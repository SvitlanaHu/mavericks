import { Outlet } from "react-router-dom";
import styles from './SharedStyles.module.css';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CamperList } from "../components/CamperList/CamperList";

export const FavoritesPage = () => {
  return (
    <div className={styles.wrapper}>
      <aside>
        <FilterBar/>
      </aside>
      <Outlet/>
      <CamperList/>
    </div>
  );
};
