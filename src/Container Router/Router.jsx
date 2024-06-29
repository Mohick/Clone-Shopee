import { Route, Router, Routes } from "react-router";
import { Suspense, lazy, memo } from "react";
const Page404 = lazy(() => import("../404 Page/page__404"));
const MainPage = lazy(() => import("../MainPage/Main Page"));
const DailyPage = lazy(() => import("../Daily Page/Daily Page"));
const HeaderPCMainPage = lazy(() =>
  import("../Header/Header PC/Header Main Page PC")
);
const HeaderMainPageMobi = lazy(() =>
  import("../Header/Header  Mobi/Header  Main Page Mobi")
);
const HeaderResultSearchMobi = lazy(() =>
  import("../Header/Header result search mobi/Header Result Search Mobi")
);
const FooterMainPage = lazy(() =>
  import("../Footer/Footer MainPage/Footer MainPage")
);
const FooterCooperate = lazy(() => import("../Footer/Cooperate/Cooperate"));
const FooterCertificate = lazy(() =>
  import("../Footer/Footer Certificate/Footer Certificate")
);
const ResultSearchItemsPage = lazy(() =>
  import("../Result Search Items Page/Result Search Items Page")
);
const Product = lazy(() => import("../Product/Product"));
const CartPage = lazy(() => import("../cart__page/cart__page"));
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
            <FooterCooperate />
            <FooterCertificate />
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense loading="....">
            <HeaderPCMainPage />
            <HeaderResultSearchMobi />
            <ResultSearchItemsPage />
            <FooterCooperate />
          </Suspense>
        }
      />
      <Route
        path="/daily"
        element={
          <Suspense loading="....">
            <HeaderPCMainPage />
            <DailyPage />
            <FooterCooperate />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense loading="....">
            <HeaderPCMainPage />

            <Product />
            <FooterCooperate />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense loading="....">
            <CartPage />
            <FooterCooperate />
          </Suspense>
        }
      />
        <Route
        path="*"
        element={
          <Suspense loading="....">
            <Page404/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default memo(RouterPage);
