import { createSlice } from '@reduxjs/toolkit';

import { fontThemes } from '../helpers/consts';

const initialState = {
  fontTheme: fontThemes[0],
};

const fontThemeSlice = createSlice({
  name: 'fontTheme',
  initialState,
  reducers: {
    setSansSerif: (state) => {
      state.fontTheme = fontThemes[0];
    },
    setSerif: (state) => {
      state.fontTheme = fontThemes[1];
    },
    setMono: (state) => {
      state.fontTheme = fontThemes[2];
    },
  }
});

export const { setSansSerif, setSerif, setMono } = fontThemeSlice.actions;
export default fontThemeSlice.reducer;
