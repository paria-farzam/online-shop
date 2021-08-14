import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import GoodsContext from "../Contexts/GoodsContext";

const ShowGoods = (props) => {
  const goodsContext = useContext(GoodsContext);
  const params = useParams();

  const goods = goodsContext.goods.filter((good) => good.key == params.id);

  //handle buy button
  let counter = document.querySelector("#counter");

  const buyGoods = () => {
    counter.innerHTML = Number(counter.innerHTML);
    counter.innerHTML++;
    goodsContext.goodsDispatch({type : 'plus-counter', payload : {key : goods[0].key}});
  };

  const minesGoods = () => {
    counter.innerHTML--;
    goodsContext.goodsDispatch({type : 'mines-counter', payload : {key : goods[0].key}});
  };

  return (
    <div>
      <img src={goods[0].src} alt="lorem" />
      {
        console.log(goods[0].src)
      }
      <div>
        <div>
          <h3>نام کالا</h3>
          <h4>{goods[0].name}</h4>
        </div>
        <div>
          <h3>قیمت</h3>
          <h4>{goods[0].price}</h4>
        </div>
        <div>
          {goods[0].goodsCounter > 0 ? (
            <div>
              <button onClick={buyGoods}>+</button>
              <p>{goods[0].goodsCounter}</p>
              <button onClick={minesGoods}>-</button>
            </div>
          ) : (
            <button onClick={buyGoods}>اضافه به سبد خرید</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowGoods;
