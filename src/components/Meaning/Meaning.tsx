import React from "react";
import { WordType } from "../../types/WordType";
import { Source } from "../Source/Source";

import './Meaning.scss';

type Props = {
  enteredWord: WordType,
}

export const Meaning: React.FC<Props> = ({ enteredWord }) => {
  const { meanings, sourceUrls } = enteredWord;

  return (
    <section className="meaning">
      {meanings.map(meaning => (
        <React.Fragment key={meaning.definitions[0].definition}>
        <h2 className="meaning__title">
          {meaning.partOfSpeech}
        </h2>

        <p className="meaning__mean">
          Meaning
        </p>

        <ul className="meaning__list">
          {meaning.definitions.map(definition => (
            <React.Fragment key={definition.definition}>
            <li className="meaning__list__element">
              {definition.definition}
            </li>
            {definition.example && (
              <p className="meaning__list__example">
                {definition.example}
              </p>
            )}
            </React.Fragment>
          ))}
        </ul>
        </React.Fragment>
      ))}

      <div className="meaning__source">
        <p className="source__text">
          Source
        </p>

        {sourceUrls.map(url => (
          <Source
            url={url}
            key={url}
          />
        ))}
      </div>
    </section>
  );
}