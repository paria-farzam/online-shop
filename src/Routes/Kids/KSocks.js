import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const KSocks = () => {
  const goodsContext = useContext(GoodsContext);
  const sockses = goodsContext.goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "socks");

  if (sockses.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{">"}</p>
          <Link to="/kids">بچگانه</Link>
        </div>
        <Link to="/">خانه</Link>
        <p>{">"}</p>
        <Link to="/kids">بچگانه</Link>
        {sockses.map((socks) => (
          <Goods goods={socks} key={socks.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default KSocks;
