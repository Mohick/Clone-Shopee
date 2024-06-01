import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import HandleFilterNavigation from "../handle filter navigation/handle filter navigation";

 function RenderFilterOptionsResultSearch({data}) {
  const [items, setItems] = useState([]);
  const navigation = useNavigate();
  let UseQuery;
  useCallback(
    (UseQuery = () => {
      return new URLSearchParams(useLocation().search);
    }),
    []
  );
  const query = UseQuery();
  useEffect(() => {
    const getDate = setTimeout(() => {
     

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
        
    }, 0);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return (
    <>
      <div className="result__search__items__page__filter__body__items--options">
        {items[0]?.map((item, index) => {
          return (
            <div
              key={index}
              className="result__search__items__page__filter__body__items__options--choose"
            >
              <input
                onClick={() =>
                  HandleFilterNavigation.multipleOptions(
                    navigation,
                    item.kind,
                    query,
                    "byCategory"
                  )
                }
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
        {items[1]?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                HandleFilterNavigation.multipleOptions(
                  navigation,
                  item.kind,
                  query,
                  "byCategory"
                )
              }
              className="result__search__items__page__filter__body__items__options--choose"
            >
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
