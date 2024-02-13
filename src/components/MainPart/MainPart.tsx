import { useAppSelector } from "../../app/hooks";

import './MainPart.scss';
import { Meaning } from "../Meaning/Meaning";
import { Audio } from "../Audio/Audio";
import { extractAudioTranscription } from "../../helpers/getAudioFiles";

export const MainPart = () => {
  const word = useAppSelector(state => state.word.word);
  const wordDefinition = useAppSelector(state => state.wordDefinition);
  const audioTranscription = extractAudioTranscription(wordDefinition);

  return (
    <main className="main">
      <div className="main__top">
        <div className="main__word word">
          <h1 className="word__title">
            {word}
          </h1>

          {audioTranscription && (
            <h2 className="word__phonethics">
              {audioTranscription}
            </h2>
          )}
        </div>

        <div className="main__audio audio">
          <Audio />
        </div>
      </div>

      <div className="main__meanings">
        {wordDefinition.map(oneWord => (
          <Meaning
            enteredWord={oneWord}
            key={JSON.stringify(oneWord)}
          />
        ))}
      </div>
    </main>
  );
}