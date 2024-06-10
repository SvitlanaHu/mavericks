import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  selectCampersCount, 
  selectGetCamperList,
  selectIsLoading,
  selectFavoritesIDs,
  selectShowedVans,
} from "../../Redux/selectors";
import { fetchCamperList } from "../../Redux/operation";
import { showMore } from "../../Redux/camperSlice";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import style from "./CamperList.module.css";


export const CamperList = () => {  
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectGetCamperList);
  const campersCount = useSelector(selectCampersCount);
  const showedVans = useSelector(selectShowedVans);
  const favoriteCampers = useSelector(selectFavoritesIDs);

  useEffect(() => {
    dispatch(fetchCamperList());
  }, [dispatch]);

  function handleLoadMore() {
    const newShowedVans = showedVans + 4;
    dispatch(showMore(newShowedVans));
    dispatch(fetchCamperList(newShowedVans));
  }

  return (
    <>
      {location.pathname === "/catalog" && (
        <div className={style.wrapper}>
          <ul className={style.box}>
            {!isLoading &&
              camperList
                ?.map((camper) => {
                  return (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  );
                })}
          </ul>
          {campersCount > showedVans && (
            <button
              className={style.btn}
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </button>       
          )}
        </div>
      )}
      {location.pathname === "/favorite" && (
        <div className={style.wrapper}>
          {favoriteCampers.length ? (
            <ul className={style.box}>
              {!isLoading &&
                camperList
                  ?.filter((camper) => favoriteCampers.includes(camper._id))
                  .map((camper) => (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  ))}
            </ul>
          ) : (
            <div className={style.infoWrapper}>
              <div className={style.img}>
                <img src="/src/images/camper.svg" alt="My camper"  className={style.svg} />
              </div>
                
              <div className={style.content}>
                <p className={style.info}>
                  There is no any favorite campers yet...
                </p>
                <Link to="/catalog" className={style.link}>
                  Try to choose one!!!
                </Link>
              </div>
            </div>
          )}
        </div>
      )}    
    </>
  );
};
