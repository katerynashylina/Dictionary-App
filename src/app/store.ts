import { configureStore } from '@reduxjs/toolkit';

import fontThemeReducer from '../features/fontTheme';
import colorThemeReducer from '../features/colorTheme';
import wordDefinitionReducer from '../features/wordDefinition';
import wordReducer from '../features/enteredWord';

export const store = configureStore({
  reducer: {
    fontTheme: fontThemeReducer,
    colorTheme: colorThemeReducer,
    wordDefinition: wordDefinitionReducer,
    word: wordReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
