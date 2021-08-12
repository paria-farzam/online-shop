import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import GoodsContext from "../Contexts/GoodsContext";

const ShowGoods = (props) => {
  const goodsContext = useContext(GoodsContext);
  const params = useParams();

  const goods = goodsContext.goods.filter((good) => good.key == params.id);

  //handle buy button
  let counter = document.querySelector("#counter");
  let [counter2, setCounter2] = useState(0);

  const buyGoods = () => {
    counter.innerHTML = Number(counter.innerHTML);
    counter.innerHTML++;
    let plus = counter2;
    plus++;
    setCounter2(plus);
  };

  const minesGoods = () => {
    counter.innerHTML--;
    let mines = counter2;
    mines--;
    setCounter2(mines);
  };

  return (
    <div>
      <img src={goods[0].src} alt="lorem" />
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
          {counter2 > 0 ? (
            <div>
              <button onClick={buyGoods}>+</button>
              <p>{counter2}</p>
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
