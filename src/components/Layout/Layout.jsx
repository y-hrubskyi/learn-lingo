import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyle";
import * as SC from "./Layout.styled";

export const Layout = () => {
  return (
    <SC.Container>
      <GlobalStyle />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites"> Favorites</NavLink>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </SC.Container>
  );
};
