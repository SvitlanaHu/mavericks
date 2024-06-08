import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperList } from "./operation";

const camperSlice = createSlice({
  name: "camperData",
  initialState: {
    campers: [],
    isLoading: false,
  },
  reducers: {
    switchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
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

export const { switchLoading } = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
