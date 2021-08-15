import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const FSkirt = () => {
  const goodsContext = useContext(GoodsContext);
  const skirts = goodsContext.goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "skirt");

  if (skirts.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{'>'}</p> 
          <Link to="/women">زنانه</Link>
        </div>
        {skirts.map((skirt) => (
          <Goods goods={skirt} key={skirt.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default FSkirt;
