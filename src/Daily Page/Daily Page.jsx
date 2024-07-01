import axios from "axios";
import { useEffect, useState } from "react";
import RenderItemsNeedSearch from "../Result Search Items Page/Items Need Search/Render Items/Render Items";
import clsx from "clsx";
import css from "./Daily Page.module.scss";
import css400 from "./Daily Page 400.module.scss";
import css600 from "./Daily Page 600.module.scss";
import css700 from "./Daily Page 700.module.scss";
import css900 from "./Daily Page 900.module.scss";
import css1000 from "./Daily Page 1000.module.scss";
import css1100 from "./Daily Page 1100.module.scss";
import { Icons } from "../Container  Component  SVG ICON/Manage Icon";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import LoadingPage from "../Loading/loading__page";
import EndLoadingPage from "../Loading/end__loading";
const DailyPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://json-be-shopee.onrender.com/api__search").then((response) => {
      const data = response.data;
      setItems(data);
    });
  }, []);
  return items.length === 0 ? <LoadingPage/> : (
    <div
      className={clsx(
        css.daily,
        css400.daily,
        css600.daily,
        css700.daily,
        css900.daily,
        css1000.daily,
        css1100.daily
      )}
    >
      <EndLoadingPage/>
      <div className={clsx(css.layout, css1000.layout, "layout")}>
        <div className={clsx(css.header, css1000.header)}>
          <Link
            to={"/"}
            className={clsx(css.btn__back__page, css1000.btn__back__page)}
          >
            <Icons.arrowLeftHaveTail className={clsx(css.icons__arrow)} />
          </Link>
          <div className={clsx(css.title, css1000.title)}>Daily Discover</div>
        </div>
        <div
          className={clsx(
            css.body,
            css400.body,
            css600.body,
            css700.body,
            css900.body,
            css1000.body,
            css1100.body
          )}
        >
          <RenderItemsNeedSearch data={items} />
        </div>

        <div className={clsx(css.footer, css1000.footer)}>
          <Pagination length={items.length} />
        </div>
      </div>
    </div>
  );
};

export default DailyPage;
