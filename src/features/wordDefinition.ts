import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WordType } from '../types/WordType';

const initialState: WordType[] = [];

const wordDefinitionSlice = createSlice({
  name: 'wordDefinition',
  initialState,
  reducers: {
    setWordDefinition: (_, action: PayloadAction<WordType[]>) => {
      return action.payload;
    },
  }
});

export const { setWordDefinition } = wordDefinitionSlice.actions;
export default wordDefinitionSlice.reducer;
