import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";

import * as SC from "./Layout.styled";

export const Layout = () => {
  return (
    <SC.Container>
      <GlobalStyle />

      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </SC.Container>
  );
};
