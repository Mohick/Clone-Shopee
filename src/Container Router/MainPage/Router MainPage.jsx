import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import MainPage from "../../MainPage/Main Page";
const HeaderPC = lazy(() =>
  import("../../Header/Header PC/Header Main Page PC")
);
const HeaderMobi = lazy(() =>
  import( "../../Header/Header  Mobi/Header  Main Page Mobi")
);
function RouterMainPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HeaderPC />
            <HeaderMobi/>
            <MainPage/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default RouterMainPage;
