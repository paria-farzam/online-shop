import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const KTShirt = () => {
  const goodsContext = useContext(GoodsContext);
  const Tshirts = goodsContext.goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "Tshirt");

  if (Tshirts.length > 0) {
    return (
      <div>
        <div>
          <Link to="/">خانه</Link>
          <p>{">"}</p>
          <Link to="/kids">بچگانه</Link>
        </div>
        {Tshirts.map((Tshirt) => (
          <Goods goods={Tshirt} key={Tshirt.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default KTShirt;
