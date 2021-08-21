import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Goods from "../../Components/Goods/Goods";
import GoodsContext from "../../Contexts/GoodsContext";
import NotAvailable from "../NotAvailable";

const MPants = () => {
  const goodsContext = useContext(GoodsContext);
  const pantses = goodsContext.goods
    .filter((good) => good.type === "male")
    .filter((good) => good.category === "pants");

  if (pantses.length > 0) {
    return (
      <div>
        <div className='back-links py-1 px-2 d-flex flex-row align-items-center'>
          <Link to="/" className='text-decoration-none text-dark px-1'> خانه</Link>
          <p className='px-1 m-0'>{' > '}</p> 
          <Link to="/men" className='text-decoration-none text-dark px-1'> مردانه </Link>
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

export default MPants;
