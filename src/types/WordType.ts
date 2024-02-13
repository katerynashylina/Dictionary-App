type Definitions = {
  definition: string,
  example: string,
}

type MeaningType = {
  antonyms: string[],
  definitions: Definitions[],
  partOfSpeech: string,
  synonyms: string[],
}

type PhoneticsType = {
  audio: string,
  text: string,
}

export type WordType = {
  meanings: MeaningType[],
  phonetic?: string,
  phonetics: PhoneticsType[],
  sourceUrls: string[],
  word: string,
}