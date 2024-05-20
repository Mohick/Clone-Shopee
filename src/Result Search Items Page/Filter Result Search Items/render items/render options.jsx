import axios from "axios";
import { useEffect, useState } from "react";

function RenderFilterOptionsResultSearch() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getDate = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/1a0f57fa-e361-4b7f-8c4f-74dfe3d67a39")
        .then((response) => {
          const data = response.data;

          let setDate = new Map();
          data.forEach((item) => {
            const getKind = ("" + item.kind).trim().toLowerCase();
            if (setDate.get(getKind)?.kind != getKind) {
              setDate.set(getKind, { kind: getKind, length: 1 });
            } else {
              if (setDate.get(getKind)?.length > 0) {
                setDate.set(setDate.get(getKind), {
                  kind: setDate.get(getKind).kind,
                  length: ++setDate.get(getKind).length,
                });
              }
            }
          });
          const configValueMapToArray = Object.values(
            Object.fromEntries(setDate)
          );

          if (configValueMapToArray.length > 3) {
            setItems([
              configValueMapToArray.slice(0, 4),
              configValueMapToArray.slice(4, configValueMapToArray.length - 1),
            ]);
          } else {
            setItems([configValueMapToArray]);
          }
        });
    }, 0);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return (
    <>
      <div className="result__search__items__page__filter__body__items--options">
        {items[0]?.map((item,index) => {
          return (
            <div key={index} className="result__search__items__page__filter__body__items__options--choose">
              <input
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={item.kind}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                {item.kind} ({item.length})
              </span>
            </div>
          );
        })}
      </div>
      <div className="result__search__items__page__filter__body__items--options--more">
        {items[1]?.map((item,index) => {
          return (
            <div key={index} className="result__search__items__page__filter__body__items__options--choose">
              <input
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={item.kind}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                {item.kind} ({item.length})
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RenderFilterOptionsResultSearch;
