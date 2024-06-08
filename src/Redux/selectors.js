export const selectGetCamperList = (state) => state.camperData.campers.data;

export const selectIsLoading = (state) => state.camperData.isLoading;

export const selectCampersCounr = (state) =>
  state.camperData.campers.campersCount;
