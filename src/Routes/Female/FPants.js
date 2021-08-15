import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const FPants = () => {
  const goodsContext = useContext(GoodsContext);
  const pantses = goodsContext.goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "pants");

  if (pantses.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{'>'}</p> 
          <Link to="/women">زنانه</Link>
        </div>
        {pantses.map((pants) => (
          <Goods goods={pants} key={pants.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default FPants;
