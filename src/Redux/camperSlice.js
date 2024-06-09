import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperList } from "./operation";
import { produce } from "immer";

const camperSlice = createSlice({
  name: "camperData",
  initialState: {
    campers: [],
    isLoading: false,
    showedVans: 4,
    favoritesIDs: [],
    filters: { location: null, details: [], camperType: "" },
  },
  reducers: {
    switchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showMore: (state, action) => {
      state.showedVans = action.payload;
    },
    toggleFavorite: (state, action) => {
      const _id = action.payload;
      state.campers.data = produce(state.campers.data, (draft) => {
        const favoriteCamper = draft.find((camper) => camper._id === _id);
        if (favoriteCamper) {
          favoriteCamper.favorite = !favoriteCamper.favorite;
        }
      });
      if (!state.favoritesIDs.includes(_id)) {
        state.favoritesIDs = [...state.favoritesIDs, _id].sort((a, b) => {
          return a - b;
        });
      } else {
        state.favoritesIDs = [...state.favoritesIDs].filter((id) => id !== _id);
      }
      console.log('toggleFavorite:', state.favoritesIDs);
    },
    setFilters: (state, action) => {
      const { location, details, camperType } = action.payload;

      if (location) {
        state.filters.location = location;
      }

      if (details.length) {
        state.filters.details = details;
      }

      if (camperType) {
        state.filters.camperType = camperType;
      }
    },
    resetFilters: (state) => {
      state.filters = { location: null, details: [], camperType: "" }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCamperList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { switchLoading, showMore, toggleFavorite, setFilters, resetFilters } = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
