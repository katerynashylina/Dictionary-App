import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  word: 'pool',
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;;
    },
  }
});

export const { setWord } = wordSlice.actions;
export default wordSlice.reducer;
