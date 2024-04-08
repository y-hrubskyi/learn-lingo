import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyle";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites"> Favorites</NavLink>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
