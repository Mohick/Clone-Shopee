import { Route, Router, Routes } from "react-router";
import { Suspense, lazy } from "react";
const MainPage = lazy(() => import("./MainPage/Router MainPage"));

function RouterPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense loading='....'>
            <MainPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default RouterPage;
