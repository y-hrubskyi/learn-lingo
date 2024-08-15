import { Themes } from '~/styles/themes';

const storageKey = 'theme';

export const getInitialTheme = () => {
  return JSON.parse(localStorage.getItem(storageKey)) ?? Themes.YELLOW.name;
};

export const saveTheme = themeName => {
  localStorage.setItem(storageKey, JSON.stringify(themeName));
};
