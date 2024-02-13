import { createSlice } from '@reduxjs/toolkit';

import { colorThemes } from '../helpers/consts';

const initialState = {
  colorTheme: colorThemes[0]
};

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.colorTheme = colorThemes[0];
    },
    setDarkTheme: (state) => {
      state.colorTheme = colorThemes[1];
    },
  }
});

export const { setLightTheme, setDarkTheme } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
