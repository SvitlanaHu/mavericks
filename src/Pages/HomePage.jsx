import { FilterBar } from '../components/FilterBar/FilterBar';
import styles from './SharedStyles.module.css';

export const HomePage = () => {
  return <>

  <div className={styles.wrapper}>
    <aside>
      <FilterBar/>
    </aside>
  </div></>;
};
