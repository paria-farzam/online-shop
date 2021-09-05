import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import NotAvailable from "../NotAvailable";
import "./mobile.css";

const FTShirt = () => {
  const goods = useSelector(state => state.goods);
  const tShirts = goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "Tshirt")
    .slice()
    .sort((a, b) => (b.key < a.key ? 1 : -1));

  if (tShirts.length > 0) {
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
        {tShirts.map((Tshirt) => (
          <Goods goods={Tshirt} key={Tshirt.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default FTShirt;
