import { WordType } from "../types/WordType";

export const extractAudioUrl = (wordsData: WordType[]) => {
  const audioUrls: string[] = [];

  wordsData.forEach(wordData => {
      wordData.phonetics.forEach(phonetic => {
          if (phonetic.audio !== '') {
              audioUrls.push(phonetic.audio);
          }
      });
  });

  return audioUrls[0];
};

export const extractAudioTranscription = (wordsData: WordType[]) => {
    const transcriptions: string[] = [];

    wordsData.forEach(wordData => {
        if (wordData.phonetic) {
            transcriptions.push(wordData.phonetic);
        }
    });

    return transcriptions[0];
};
