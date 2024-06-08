import axios from "axios";
import { useEffect, useState } from "react";
import css from "./Render Items.module.css";
import css1000 from './Render Items 1000.module.css'
import { useLocation } from "react-router";
import clsx from "clsx";
const RenderItemsNeedSearch = ({ data, lengthShow = undefined ,classSetWidth}) => {
  const [items, setItems] = useState([]);
  const useQuery = function () {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const byCategory = query.get("byCategory");
  const shipFrom = query.get("shipFrom");
  const shippingOptions = query.get("shippingOptions");
  const brands = query.get("brands");
  const price = query.get("price");
  const rating = query.get("rating");
  const pages = query.get("pages");

  useEffect(() => {
    const getDate = setTimeout(() => {
      try {
        const arrayNameByCategory = byCategory?.split("_");
        const arrayNameByShip = shipFrom?.split("_");
        const arrayNameByShipOptions = shippingOptions?.split("_");
        const arrayNameByBrand = brands?.split("_");
        const arrayNamePrice = price?.split("_");
        const rated = Number(rating);

        const filterDataHaveOnQuery = data.filter((item) => {
          const kind = item.kind
            .toLocaleLowerCase()
            .trim()
            .replace(/\s+/g, "")
            .replace(/đ/g, "d")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const ship = item.ShippedFrom.toLocaleLowerCase()
            .trim()
            .replace(/\s+/g, "")
            .replace(/đ/g, "d")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const shipOptions = item.shippingOptions
            .toLocaleLowerCase()
            .trim()
            .replace(/\s+/g, "")
            .replace(/đ/g, "d")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const brand = item.brands
            .toLocaleLowerCase()
            .trim()
            .replace(/\s+/g, "")
            .replace(/đ/g, "d")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const cost = Number(item.cost.replace(/\./g, ""));
          const rate = Number(item.rate);

          return (
            arrayNameByCategory?.includes(kind) ||
            arrayNameByShip?.includes(ship) ||
            arrayNameByShipOptions?.includes(shipOptions) ||
            arrayNameByBrand?.includes(brand) ||
            (arrayNamePrice?.length > 1
              ? Number(arrayNamePrice[0]) < cost &&
                Number(arrayNamePrice[1]) > cost
              : false) ||
            rate < rated
          );
        });

        const filterDataHavenOnQuery = data.filter((item) => {
          return !filterDataHaveOnQuery.includes(item);
        });

        const dataNeedRender = filterDataHaveOnQuery.concat(
          filterDataHavenOnQuery
        );
        const startSliceArr = Number(pages) <= 1 ? 0 : 40 * (Number(pages) - 1);

        const itemsNeedFilter = dataNeedRender.slice(
          startSliceArr,
          startSliceArr + 40
        );
        setItems(itemsNeedFilter.slice(0, lengthShow));
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => {
      clearTimeout(getDate);
    };
  }, [window.location.search]);
  return items.map((item, index) => {
    return (
      <div className={clsx(css.items , css1000.items,classSetWidth)} key={index}>
        <div className={css.items__header}>
          <img className={css.items__header__img} src={item.url} alt="" />
          {item.small ? (
            <img
              src="/Daili discover/small.png"
              className={css.items__header__small}
              alt=""
            />
          ) : undefined}
          {item.like ? (
            <img
              src="/Daili discover/like plus.png"
              alt=""
              className={css.items__header__like}
            />
          ) : undefined}
          {item.checkedOne ? (
            <img
              src="/Daili discover/1 voucher.png"
              className={css.items__header__event}
              alt=""
            />
          ) : undefined}
          {item.checkedTwo ? (
            <img
              src="/Daili discover/2 voucher.png"
              className={css.items__header__event}
              alt=""
            />
          ) : undefined}
          {item.checkedThree ? (
            <img
              src="/Daili discover/3 voucher.png"
              className={css.items__header__event}
              alt=""
            />
          ) : undefined}
          {item.checkedFour ? (
            <img
              src="/Daili discover/4 voucher.png"
              className={css.items__header__event}
              alt=""
            />
          ) : undefined}
          {item.checkedFull ? (
            <img
              src="/Daili discover/4 voucher.png"
              className={css.items__header__event}
              alt=""
            />
          ) : undefined}
        </div>
        <div className={css.items__body}>
          <div className={css.items__body__name}>{item.name}</div>
          <div className={css.items__body__price}>
            <div className={css.items__body__price__current}>₫ {item.cost}</div>
            <div className={css.items__body__price__default}>₫ 250.000</div>
            {("" + item.discount).trim().length > 0 ? (
              <div className={css.items__body__price__discount}>
                {item.discount}
              </div>
            ) : undefined}
          </div>
          <div className={css.items__body__star}>
            <img src="/Star/full_star.svg" alt="" />
            <img src="/Star/full_star.svg" alt="" />
            <img src="/Star/full_star.svg" alt="" />
            <img src="/Star/full_star.svg" alt="" />
            <img src="/Star/half_star.svg" alt="" />
            <span className={css.items__body__sold}>{item.sold}</span>
          </div>
          <div className={css.items__body__location}>
            <div className={css.items__body__location__time__ship}>
              <img src="/Car Ship/car_ship.svg" alt="" /> {item.shipTime} Days
            </div>
            <div className={css.items__body__location__shop}>
              <img src="/location/location.svg" alt="" />
              <span className={css.items__body__location__shop__name}>
                {item.ShippedFrom}
              </span>
            </div>
          </div>
        </div>
        {/* <div className={css.find__similar}>
        Find Similar
        </div> */}
      </div>
    );
  });
};

export default RenderItemsNeedSearch;
