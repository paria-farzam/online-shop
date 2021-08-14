import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GoodsContext from "../../Contexts/GoodsContext";

const Goods = (props) => {
  let counter = document.querySelector("#counter");
  const goodsContext = useContext(GoodsContext)

  const buyGoods = () => {
    counter.innerHTML = Number(counter.innerHTML);
    counter.innerHTML++;
    goodsContext.goodsDispatch({type : 'plus-counter', payload : {key : props.goods.key}});
  };

  const minesGoods = () => {
    counter.innerHTML--;
    goodsContext.goodsDispatch({type : 'mines-counter', payload : {key : props.goods.key}});
  };

  return (
    <div>
      <Link to={`/goods/${props.goods.key}`} goods={props.goods}>
        <img src={props.goods.src} alt="lorem" />
        <div>
          <h5>{props.goods.inventory}</h5>
          <h5>تومان {props.goods.price}</h5>
        </div>
      </Link>
      <div>
        {props.goods.goodsCounter > 0 ? (
          <div>
            <button onClick={buyGoods}>+</button>
            <p>{props.goods.goodsCounter}</p>
            <button onClick={minesGoods}>-</button>
          </div>
        ) : (
          <button onClick={buyGoods}>اضافه به سبد خرید</button>
        )}
      </div>
    </div>
  );

};


export default Goods;