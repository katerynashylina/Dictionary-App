import { ChangeEvent } from "react";
import { colorThemes, fontThemes } from "../../helpers/consts";
import './Selection.scss';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMono, setSansSerif, setSerif } from "../../features/fontTheme";
import classNames from "classnames";

export const Selection = () => {
  const dispatch = useAppDispatch();
  const colorTheme = useAppSelector(state => state.colorTheme.colorTheme);

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    switch (selectedTheme) {
      case fontThemes[0]:
        dispatch(setSansSerif());
        break;
      case fontThemes[1]:
        dispatch(setSerif());
        break;
      case fontThemes[2]:
        dispatch(setMono());
        break;
      default:
        dispatch(setSansSerif());
        break;
    }
  };

  return (
    <label className="select">
      <select
        className={classNames("select__wrapper", {
          "select__wrapper--dark": colorTheme === colorThemes[1],
        })}
        onChange={handleThemeChange}
      >
        {fontThemes.map(theme => (
          <option
            value={theme}
            key={theme}
            className="select__option"
          >
            {theme}
          </option>
        ))}
      </select>
    </label>
  );
}