import { useLocation } from "react-router-dom";
import { DataProduct } from "./Data";
import { lazy, useEffect, useState } from "react";
import css from "./products.module.scss"
import css1000 from "./product_1000.module.scss"
import clsx from "clsx";
import axios from "axios";
import EndLoadingPage from "../Loading/end__loading";
import LoadingPage from "../Loading/loading__page";
const ProductHeaderMobi = lazy(() => import('./Product Header/Product Header'));
const SwiperProduct = lazy(() => import('./Swiper Product/Swiper Product'));
const TitleProduct = lazy(() => import('./Title Product/Title Product'));
const PriceProduct = lazy(() => import('./Price Product/Price Product'));
const FreeReturnProduct = lazy(() => import('./Free Return/Free Return'));
const VoteProducts = lazy(() => import('./Vote/Vote Products'));
const VoucherProduct = lazy(() => import('./Voucher/Voucher Product'));
const FreeShipProducts = lazy(() => import('./Free Ship/Free Ship'));
const MediaProducts = lazy(() => import('./Media/Media'));
const InfoShop = lazy(() => import('./Info Shop/Info Shop'));
const OrtherProducts = lazy(() => import('./Other Product/Other__Products'));
const DescriptionProduct = lazy(() => import('./Description Product/Description Product'));
const RatingProduct = lazy(() => import('./Rating Products/Rating Products'));
const ReltesProduct = lazy(() => import('./Relate_Product/Relate_Product'));
const VoteProductsFromUser = lazy(() => import('./vote_products_from_user/vote_products_from_user'));
const FreeReturnProduct1000 = lazy(() => import('./Free Return/free_return_1000'));
const FreeShip1000 = lazy(() => import('./Free Ship/free_ship_1000'));
const QuantityProduct1000 = lazy(() => import('./Quantity/quantity_1000'));
const BtnBuyProducts1000 = lazy(() => import('./btn__buy__products/btn__buy__products__1000'));
const Media1000 = lazy(() => import('./Media/media__1000'));
const VoucherProduct1000 = lazy(() => import('./Voucher/voucher_product_1000'));
const DropdownBuyProduct = lazy(() => import('./dropdown__buy__product/dropdown__buy__product'));
const Page404 = lazy(() => import('../404 Page/page__404'));
const Product = () => {
  const [items, setItems] = useState(null);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const title = useQuery().get("title").toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URLItems = DataProduct.filter((item) => item.name === title);
        const getFirstItems = URLItems[0];
        if (getFirstItems?.link) {
          await Promise.all([
            axios.get("https://json-be-shopee.onrender.com/api__search/"),
            axios.get(getFirstItems.link),
          ]).then(([otherProductsResponse, productResponse]) => {
            let data = productResponse.data[0];
            data.otherProducts = otherProductsResponse.data;
            console.log(data);
            setItems(data);
          });
        } else {
          setItems({
            error: true,
          });
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [title]);
  if (!items) return <LoadingPage/>;
  if (items.error) return <Page404 />;
  return (
      <>
      <EndLoadingPage/>
      <div className={clsx(css.layout, "layout")}>
      <ProductHeaderMobi name={items.name} />
      <div className={css1000.introduce__product}>
        <div className={css1000.ui__products}>
          <div className={css1000.slider__product}>
            <SwiperProduct
              data={{
                arrImg: items.images,
                events: items.event,
              }}
            />
            <Media1000 like={items.rating} />
          </div>
        </div>
        <div className={css1000.text__info__products}>
          <TitleProduct name={items.name} />
          <VoteProductsFromUser
            star={items.star}
            rating={items.rating}
            sold={items.sold}
          />
          <PriceProduct price={items.priceDeFault} discount={items.discount} />
          <VoucherProduct1000
            voucher={items.Vouchers}
            urlImgShop={items.logoShop}
          />
          <FreeReturnProduct />
          <FreeReturnProduct1000 />
          <FreeShip1000 />
          <QuantityProduct1000 available={items.available} />
          <BtnBuyProducts1000 id={items.id} nameProduct={items.name} />
        </div>
      </div>

      <VoteProducts star={items.star} sold={items.sold} />
      <VoucherProduct Vouchers={items.Vouchers} />
      <FreeShipProducts />
      <MediaProducts />
      <InfoShop
        imgShop={items.logoShop}
        voucherShop={items.Vouchers}
        nameShop={items.nameShop}
        localtionsShop={items.locationShop}
        productShop={items.productsShop}
        responsiveShop={items.responseRateShop}
        starShop={items.star}
        timeJoinShop={items.joinedShop}
        rating={items.rating}
        followShop={items.Follower}
      />
      <OrtherProducts otherProducts={items.otherProducts} />
      <DescriptionProduct
        Kind={items.kind}
        category={items.navigationProducts}
        discount={100 - (items.discount / items.priceDeFault) * 100}
        arrayString={items.productDescription}
        shipFrom={items.locationShop}
      />
      <RatingProduct comment={items.comment} star={items.star} />
      <ReltesProduct dataRelateProduct={items.otherProducts} />
      <DropdownBuyProduct nameProducts={items.name} />
    </div>
      
      </>
  );
};

export default Product;
