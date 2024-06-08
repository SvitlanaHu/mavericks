import { useDispatch, useSelector } from "react-redux";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import style from "./CamperList.module.css";
import { useEffect, useState } from "react";
import { fetchCamperList } from "../../Redux/operation";
import {
  selectCampersCounr,
  selectGetCamperList,
  selectIsLoading,
} from "../../Redux/selectors";

export const CamperList = () => {
  const [showedCamps, setShowedCamps] = useState(4);
  const dispatch = useDispatch();
  const camperList = useSelector(selectGetCamperList);
  const campersCount = useSelector(selectCampersCounr);

  function handleLoadMore() {
    setShowedCamps((prev) => prev + 4);
  }

  useEffect(() => {
    dispatch(fetchCamperList(showedCamps));
  }, [dispatch, showedCamps]);

  return (
    <div className={style.wrapper}>
      <ul className={style.box}>
        {selectIsLoading &&
          camperList?.map((camper) => {
            return (
              <li key={camper._id}>
                <CamperListItem camper={camper} />
              </li>
            );
          })}
      </ul>
      <div></div>
      {showedCamps < campersCount && (
        <button className={style.btn} type="button" onClick={handleLoadMore}>
          Load more
        </button>
       
      )}
    </div>
  );
};
