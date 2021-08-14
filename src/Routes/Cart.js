import React, { useContext } from "react";
import GoodsContext from "../Contexts/GoodsContext";

const Cart = () => {
  const goodsContext = useContext(GoodsContext);
  const selected = goodsContext.goods.filter(
    (goods) => goods.selected === true
  );

  console.log(selected.length)

  if (selected.length > 0) {
    for (let i = 0; i < 3; i++) {
      return (
        <div>
          <img src={selected[i].src} />
          <div>
            <h1>{selected[i].name}</h1>
            <h6>{selected[i].color}</h6>
            <h4>{selected[i].price}</h4>
          </div>
          {console.log(`this is ${i}th time`)}
        </div>
      );
    };
  } else{
      return <div>
          <h1>شما هنوز کالایی را برای خرید انتخاب نکرده اید!</h1>
      </div>
  }

  return null;
};

export default Cart;
