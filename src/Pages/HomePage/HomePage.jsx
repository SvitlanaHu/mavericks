import { FilterBar } from '../../components/FilterBar/FilterBar';
import style from './HomePage.module.css'

export const HomePage = () => {
  return <>

  <div className={style.wrapper}>
    <aside>
      <FilterBar/>
    </aside>
  </div></>;
};
