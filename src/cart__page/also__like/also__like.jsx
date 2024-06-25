import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import css from "./also__like.module.scss";
import css400 from "./also__like__400.module.scss";
import css700 from "./also__like__700.module.scss";
import css900 from "./also__like__900.module.scss";
import css1000 from "./also__like__1000.module.scss";
import css1100 from "./also__like__1100.module.scss";
import RenderItemsNeedSearch from "../../Result Search Items Page/Items Need Search/Render Items/Render Items";

const YouAlsoLike = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api__search").then((response) => {
      const data = response.data;
      setItems(data);
    });
  }, []);

  return items.length === 0 ? null : (
    <div
      className={clsx(
        css.you__also__like,
        css400.you__also__like,
        css700.you__also__like,
        css900.you__also__like,
        css1000.you__also__like,
        css1100.you__also__like
      )}
    >
      <div
        className={clsx(
          css.you__also__like__layout,
          css400.you__also__like__layout,
          css700.you__also__like__layout,
          css900.you__also__like__layout,
          css1000.you__also__like__layout,
          css1100.you__also__like__layout,
          "layout"
        )}
      >
        <div className={clsx(css.header,css1000.header)}>
          <div className={clsx(css.header__title,css1000.header__title)}>You May Also Like</div>
        </div>
        <div
          className={clsx(
            css.body,
            css400.body,
            css700.body,
            css900.body,
            css1100.body
          )}
        >
          <RenderItemsNeedSearch data={items} />
        </div>
      </div>
    </div>
  );
};

export default YouAlsoLike;
