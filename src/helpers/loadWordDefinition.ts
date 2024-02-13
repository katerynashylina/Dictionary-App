import { Dispatch } from "redux";
import { getWord } from "./fetchDictionary";
import { setWordDefinition } from "../features/wordDefinition";

export const loadWordDef = async (word: string, dispatch: Dispatch) => {
  try {
    const dataFromServer = await getWord(word);

    dispatch(setWordDefinition(dataFromServer));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
