import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import NotAvailable from "../NotAvailable";

const MTie = () => {
  const goods = useSelector(state => state.goods);
  const ties = goods
    .filter((good) => good.type === "male")
    .filter((good) => good.category === "tie")
    .slice()
    .sort((a, b) => (b.key < a.key ? 1 : -1));

  if (ties.length > 0) {
    return (
      <div>
        <div className="back-links py-1 px-2 d-flex flex-row align-items-center">
          <Link to="/" className="text-decoration-none text-dark px-1">
            {" "}
            خانه
          </Link>
          <p className="px-1 m-0">{" > "}</p>
          <Link to="/men" className="text-decoration-none text-dark px-1">
            {" "}
            مردانه{" "}
          </Link>
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
