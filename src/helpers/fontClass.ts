import { fontThemes } from "./consts";

export const fontClass = (fontTheme: string) => {
  return {
    'sans-serif__theme': fontTheme === fontThemes[0],
    'serif__theme': fontTheme === fontThemes[1],
    'mono__theme': fontTheme === fontThemes[2],
  };
};