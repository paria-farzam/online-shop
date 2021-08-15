import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const FShirt = () => {
  const goodsContext = useContext(GoodsContext);
  const shirts = goodsContext.goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "shirt");

  if (shirts.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{'>'}</p> 
          <Link to="/women">زنانه</Link>
          {shirts.map((shirt) => (
            <Goods goods={shirt} key={shirt.key} />
          ))}
        </div>
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default FShirt;
