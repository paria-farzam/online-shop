import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const MTie = () => {
  const goodsContext = useContext(GoodsContext);
  const ties = goodsContext.goods
    .filter((good) => good.type === "male")
    .filter((good) => good.category === "tie");

  if (ties.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{">"}</p>
          <Link to="/men">مردانه</Link>
        </div>
        {ties.map((tie) => (
          <Goods goods={tie} key={tie.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default MTie;
