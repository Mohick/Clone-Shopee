import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Top Search Min-width 1000px.css'
function TopSearchHeader() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;
    if (allow) {
      axios
        .get("https://run.mocky.io/v3/ac0820b6-fdd2-4533-a069-3fdbec08d5c1")
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      allow = false;
    };
  }, []);
  return items.map((item) => {
    return (
      <Link className="top__search__header--item" key={item.id} to={`/search/${item.title}`}>
        {item.title}
      </Link>
    );
  });
}

export default TopSearchHeader;
