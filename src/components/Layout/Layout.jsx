import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { getInitialTheme } from '~/services/theme';
import { getTheme } from '~/styles/themes';

import { GlobalStyle } from '~/styles/GlobalStyle';
import { Header } from '~/components/Header/Header';
import { ThemeModal } from '~/components/ThemeModal/ThemeModal';

import * as SC from './Layout.styled';

export const Layout = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isThemePopupOpen, setIsThemePopupOpen] = useState(false);
  const location = useLocation();

  const toggleThemePopup = () => {
    setIsThemePopupOpen(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <SC.Container>
        <GlobalStyle locationPath={location.pathname} />
        <Toaster
          containerStyle={{
            zIndex: 10000
          }}
        />

        <SC.ThemeWrapper>
          <SC.ThemeBtn
            type="button"
            onClick={toggleThemePopup}
            aria-label="theme selector"
          >
            <SC.PaletteIcon />
          </SC.ThemeBtn>
          {isThemePopupOpen && (
            <ThemeModal onClose={toggleThemePopup} onThemeSelect={setTheme} />
          )}
        </SC.ThemeWrapper>

        <Header />
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </SC.Container>
    </ThemeProvider>
  );
};
