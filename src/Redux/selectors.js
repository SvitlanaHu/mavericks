export const selectGetCamperList = (state) => state.camperData.campers.data;

export const selectIsLoading = (state) => state.camperData.isLoading;

export const selectShowedVans = (state) => state.camperData.showedVans;

export const selectFavoritesIDs = state => state.camperData.favoritesIDs;

export const selectCampersCount = (state) =>
  state.camperData.campers.campersCount;
