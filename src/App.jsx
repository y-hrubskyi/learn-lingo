import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "@/components/Layout/Layout";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("@/pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("@/pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route
          path="favorites"
          element={<PrivateRoute component={<FavoritesPage />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
