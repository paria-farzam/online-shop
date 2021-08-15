import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const MCoat = () => {
  const goodsContext = useContext(GoodsContext);
  const coats = goodsContext.goods
    .filter((good) => good.type === "male")
    .filter((good) => good.category === "coat");

  if (coats.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{">"}</p>
          <Link to="/men">مردانه</Link>
        </div>
        {coats.map((coat) => (
          <Goods goods={coat} key={coat.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default MCoat;
