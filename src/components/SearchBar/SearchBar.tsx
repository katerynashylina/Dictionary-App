import './SearchBar.scss';
import search from '../../icons/icon-search.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState } from 'react';
import { setWord } from '../../features/enteredWord';
import { loadWordDef } from '../../helpers/loadWordDefinition';
import classNames from 'classnames';
import { fontClass } from '../../helpers/fontClass';
import { colorThemes } from '../../helpers/consts';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('pool');
  const fontTheme = useAppSelector(state => state.fontTheme.fontTheme);
  const colorTheme = useAppSelector(state => state.colorTheme.colorTheme);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setWord(inputValue));
    loadWordDef(inputValue, dispatch);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <label className={classNames("seacrh-bar__content", {
        "seacrh-bar__input--dark": colorTheme === colorThemes[1],
      })}
      >
        <input
          placeholder='Search for any word...'
          type="text"
          className={classNames("seacrh-bar__input", fontClass(fontTheme))}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button 
          className='search-bar__button'
          onClick={handleSearch}
        >
          <img src={search} alt="search" />
        </button>
      </label>
    </div>
  );
}