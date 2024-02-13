import { useEffect } from 'react';

import { Header } from './components/Header/Header';
import './styles/normalize.scss';
import './App.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loadWordDef } from './helpers/loadWordDefinition';
import { MainPart } from './components/MainPart/MainPart';
import classNames from 'classnames';
import { colorThemes } from './helpers/consts';
import { fontClass } from './helpers/fontClass';
import { NotFound } from './components/NotFound/NotFound';

export const App = () => {
  const word = useAppSelector(state => state.word.word);
  const fontTheme = useAppSelector(state => state.fontTheme.fontTheme);
  const colorTheme = useAppSelector(state => state.colorTheme.colorTheme);
  const wordDefinition = useAppSelector(state => state.wordDefinition);
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadWordDef(word, dispatch);
  }, []);

  return (
    <div className={classNames('page', fontClass(fontTheme), {
      'page--dark': colorTheme === colorThemes[1],
    })}>
      <div className="page__container">
        <Header />

        <SearchBar />

        {!wordDefinition.length ? (
          <NotFound />
        ) : (
          <MainPart />
        )}
      </div>
    </div>
  );
}
