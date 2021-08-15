import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const KShirt = () => {
  const goodsContext = useContext(GoodsContext);
  const shirts = goodsContext.goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "shirt");

  if (shirts.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{">"}</p>
          <Link to="/kids">بچگانه</Link>
        </div>
        {shirts.map((shirt) => (
          <Goods goods={shirt} key={shirt.key} />
        ))}
      </div>
    );
    // return (
    //   <div>
    //     <Link to="/">خانه</Link>
    //     <p>{">"}</p>
    //     <Link to="/kids">بچگانه</Link>
    //     {shirts.map((shirt) => (
    //       <Goods good={shirt} key={shirt.key} />
    //     ))}
    //   </div>
    // );
  } else {
    return <NotAvailable />;
  }
};

export default KShirt;
