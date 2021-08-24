import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";
import "./mobile.css";

const FSkirt = () => {
  const goodsContext = useContext(GoodsContext);
  const skirts = goodsContext.goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "skirt")
    .slice()
    .sort((a, b) => (b.key < a.key ? 1 : -1));

  if (skirts.length > 0) {
    return (
      <div>
        <div className="back-links py-1 px-2 d-flex flex-row align-items-center">
          <Link to="/" className="text-decoration-none text-dark px-1">
            {" "}
            خانه
          </Link>
          <p className="px-1 m-0">{" > "}</p>
          <Link to="/women" className="text-decoration-none text-dark px-1">
            {" "}
            زنانه{" "}
          </Link>
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
