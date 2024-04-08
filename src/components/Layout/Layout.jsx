import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
