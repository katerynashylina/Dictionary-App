import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { colorThemes } from '../../helpers/consts';
import { setDarkTheme, setLightTheme } from '../../features/colorTheme';
import './Switch.scss';
import moon from '../../icons/icon-moon.svg';

export const Switch = () => {
  const colorTheme = useAppSelector(state => state.colorTheme.colorTheme);
  const dispatch = useAppDispatch();

  const handleThemeChange = () => {
    colorTheme === colorThemes[1] ?
    dispatch(setLightTheme()) : dispatch(setDarkTheme());
  };

  return (
    <div className="theme">
      <div 
        className={classNames("switcher", {
          "switcher--dark": colorTheme === colorThemes[1],
        })}
        onClick={handleThemeChange}
      >
        <div
          className={classNames("switcher__circle", {
            "switcher__circle--light": colorTheme === colorThemes[0],
            "switcher__circle--dark": colorTheme === colorThemes[1],
          })}
        ></div>
      </div>
      
      <img src={moon} alt="moon" className='theme__moon'/>
    </div>
  );
}