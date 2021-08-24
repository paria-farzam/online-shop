import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const KPants = () => {
  const goodsContext = useContext(GoodsContext);
  const pantses = goodsContext.goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "pants")
    .slice()
    .sort((a, b) => (b.key < a.key ? 1 : -1));

  if (pantses.length > 0) {
    return (
      <div>
        <div className="back-links py-1 px-2 d-flex flex-row align-items-center">
          <Link to="/" className="text-decoration-none text-dark px-1">
            {" "}
            خانه
          </Link>
          <p className="px-1 m-0">{" > "}</p>
          <Link to="/kids" className="text-decoration-none text-dark px-1">
            {" "}
            بچگانه{" "}
          </Link>
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

export default KPants;
