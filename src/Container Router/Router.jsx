import { Route, Router, Routes } from "react-router";
import { Suspense, lazy, memo } from "react";
const MainPage = lazy(() => import('../MainPage/Main Page'));
const HeaderPCMainPage = lazy(() => import('../Header/Header PC/Header Main Page PC'));
const HeaderMainPageMobi = lazy(() => import('../Header/Header  Mobi/Header  Main Page Mobi'));



function RouterPage() {
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense loading='....'>
            <HeaderPCMainPage/>
            <HeaderMainPageMobi/>
            <MainPage/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default memo(RouterPage);
