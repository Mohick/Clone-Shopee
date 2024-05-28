import axios from "axios";
import { useEffect, useState } from "react";
import css from "./Render Items.module.css";
import { useLocation } from "react-router";
const RenderItemsNeedSearch = ({ url }) => {
  const [items, setItems] = useState([]);
  const useQuery = function () {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const byCategory = query.get("byCategory");
  useEffect(() => {
    const getDate = setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          const arrayNameByCategory = byCategory.split("_");

          const filDate = data.filter((item) => {
            const kind = item.kind
              .toLocaleLowerCase()
              .trim()
              .replace(/\s+/g, "")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            return arrayNameByCategory.includes(kind);
          });
          setItems(filDate);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    return () => {
      clearTimeout(getDate);
    };
  }, []);

  return items.map((item, index) => {
    return (
      <div className={css.items} key={index}>
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
      </div>
    );
  });
};

export default RenderItemsNeedSearch;
