import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { rootState } from './state';


const dataSlice = createSlice({
  name: 'data',
  initialState: rootState.data,
  reducers: {
    initData: (state) => {
      state.video = null;
      state.fullVideo = null;
      state.description = 'Sample Description';
    },
    updateVideo: (state, action: PayloadAction<string>) => {
      state.video = action.payload;
    },
    initVideo: (state) => {
      state.video = null;
      state.fullVideo = null;
    },
    updateFullVideo: (state, action: PayloadAction<string>) => {
      state.fullVideo = action.payload;
    },

    updateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    initDescription: (state) => {
      state.description = 'Sample Description';
    },



  }
})

export const { initData, updateVideo, updateFullVideo, initVideo, initDescription, updateDescription } = dataSlice.actions;
export default dataSlice.reducer;