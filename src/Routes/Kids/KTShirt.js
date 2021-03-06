import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import NotAvailable from "../NotAvailable";

const KTShirt = () => {
  const goods = useSelector(state => state.goods);
  const Tshirts = goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "Tshirt")
    .slice()
    .sort((a, b) => (b.key < a.key ? 1 : -1));

  if (Tshirts.length > 0) {
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
