import { useLocation, useNavigate } from "react-router";
import HandleNavigationResultItemsMobi from './handle navigation result items/handle navigation result items';
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css from "./Navigation Mobi.module.scss";
import css1000 from './Navigation Mobi min-width 1000px.module.scss'
import clsx from "clsx";
const NavigationResultItems = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const navigation = useNavigate()
  const query = useQuery();
  const sortby = query.get("sortby");

  return (
    <>
      <div className={clsx(css.navigation__header , css1000.navigation__header)}>
        <div
          className={clsx(
            css.navigation__header__items,
            css.navigation__header__items__bar
          )}
          onClick={() => {
            HandleNavigationResultItemsMobi.slideRowBarNav(0);
            HandleNavigationResultItemsMobi.handleLinksNavigation({
              navigation,
              text: "relevance",
            });
          }}
        >
          <span
            className={clsx(
              css.navigation__header__items__title,
              sortby?.trim().toLocaleLowerCase() ===
                "relevance".trim().toLocaleLowerCase() &&
                css.navigation__header__items__title__active
            )}
          >
            Relevance
          </span>
        </div>
        <div
          className={clsx(
            css.navigation__header__items,
            css.navigation__header__items__bar
          )}
          onClick={() => {
            HandleNavigationResultItemsMobi.slideRowBarNav(1);
            HandleNavigationResultItemsMobi.handleLinksNavigation({
              navigation,
              text: "latest",
            });
          }}
        >
          <span
            className={clsx(
              css.navigation__header__items__title,
              sortby?.trim().toLocaleLowerCase() ===
                "latest".trim().toLocaleLowerCase() &&
                css.navigation__header__items__title__active
            )}
          >
            Latest
          </span>
        </div>
        <div
          className={clsx(
            css.navigation__header__items,
            css.navigation__header__items__bar
          )}
          onClick={() => {
            HandleNavigationResultItemsMobi.slideRowBarNav(2);
            HandleNavigationResultItemsMobi.handleLinksNavigation({
              navigation,
              text: "topSales",
            });
          }}
        >
          <span
            className={clsx(
              css.navigation__header__items__title,
              sortby?.trim().toLocaleLowerCase() ===
                "topsales".trim().toLocaleLowerCase() &&
                css.navigation__header__items__title__active
            )}
          >
            Top Sales
          </span>
        </div>
        <div
          className={clsx(css.navigation__header__items)}
          onClick={() => {
            HandleNavigationResultItemsMobi.slideRowBarNav(3);
            HandleNavigationResultItemsMobi.handleLinksNavigation({
              navigation,
              text: "price",
            });
          }}
        >
          <span
            className={clsx(
              css.navigation__header__items__title,
              sortby?.trim().toLocaleLowerCase() ===
                "price".trim().toLocaleLowerCase() &&
                css.navigation__header__items__title__active
            )}
          >
            Price
          </span>
          <Icons.arrowTopAndBottom
            className={clsx(css.navigation__header__items__icon)}
          />
        </div>
        <div className={clsx(css.navigation__header__bar)} name={sortby}></div>
      </div>
      <div className={clsx(css.navigation__body,css1000.navigation__body)}>
        <div className={clsx(css.navigation__body__options)}>
          <span className={css.navigation__body__options__title}>
            Shopee Mall
          </span>
        </div>
        <div className={clsx(css.navigation__body__options)}>
          <span className={css.navigation__body__options__title}>
            Freeship Xtra
          </span>
        </div>
        <div className={clsx(css.navigation__body__options)}>
          <span className={css.navigation__body__options__title}>
            Freeship Xtra
          </span>
        </div>
        <div className={clsx(css.navigation__body__options)}>
          <span className={css.navigation__body__options__title}>
            Freeship
          </span>
        </div>
        <div className={clsx(css.navigation__body__options)}>
          <span className={css.navigation__body__options__title}>
            Rating
          </span>
          <Icons.arrowAngleDown className={clsx(css.navigation__body__options__icon)} />
        </div>
      </div>
    </>
  );
};

export default NavigationResultItems;
