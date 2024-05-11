import { Route, Router, Routes } from "react-router";
import { Suspense, lazy, memo } from "react";
const MainPage = lazy(() => import("../MainPage/Main Page"));
const HeaderPCMainPage = lazy(() =>
  import("../Header/Header PC/Header Main Page PC")
);
const HeaderMainPageMobi = lazy(() =>
  import("../Header/Header  Mobi/Header  Main Page Mobi")
);
const FooterMainPage = lazy(() => import("../Footer/Footer MainPage/Footer MainPage"));
const FooterCooperate = lazy(() => import("../Footer/Cooperate/Cooperate"));
const FooterCertificate = lazy(() => import("../Footer/Footer Certificate/Footer Certificate"));
function RouterPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense loading="....">
            <HeaderPCMainPage />
            <HeaderMainPageMobi />
            <MainPage />
            <FooterMainPage />
            <FooterCooperate/>
            <FooterCertificate/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default memo(RouterPage);
