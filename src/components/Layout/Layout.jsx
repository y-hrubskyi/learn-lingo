import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";

import * as SC from "./Layout.styled";

export const Layout = () => {
  const location = useLocation();

  return (
    <SC.Container>
      <GlobalStyle locationPath={location.pathname} />

      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </SC.Container>
  );
};
