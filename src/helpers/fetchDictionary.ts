const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const request = async (url: string) => {
  const res = await fetch(BASE_URL + url);

  return res.json();
};

export const getWord = (word: string) => request(`${word}`);
