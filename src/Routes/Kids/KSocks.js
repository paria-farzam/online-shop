import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const KSocks = () => {
  const goodsContext = useContext(GoodsContext);
  const sockses = goodsContext.goods
    .filter((good) => good.type === "kids")
    .filter((good) => good.category === "socks");

  if (sockses.length > 0) {
    return (
      <div>
        <div className='back-links py-1 px-2 d-flex flex-row align-items-center'>
          <Link to="/" className='text-decoration-none text-dark px-1'> خانه</Link>
          <p className='px-1 m-0'>{' > '}</p> 
          <Link to="/kids" className='text-decoration-none text-dark px-1'> بچگانه </Link>
        </div>
        
        {sockses.map((socks) => (
          <Goods goods={socks} key={socks.key} />
        ))}
      </div>
    );
  } else {
    return <NotAvailable />;
  }
};

export default KSocks;
