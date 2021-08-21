import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";
import "./mobile.css";

const FTShirt = () => {
  const goodsContext = useContext(GoodsContext);
  const tShirts = goodsContext.goods
    .filter((good) => good.type === "female")
    .filter((good) => good.category === "Tshirt");

  if (tShirts.length > 0) {
    return (
      <div>
        <div className='back-links py-1 px-2 d-flex flex-row align-items-center'>
          <Link to="/" className='text-decoration-none text-dark px-1'> خانه</Link>
          <p className='px-1 m-0'>{' > '}</p> 
          <Link to="/women" className='text-decoration-none text-dark px-1'> زنانه </Link>
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
