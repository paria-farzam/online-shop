import React, { useContext } from "react";
import GoodsContext from "../Contexts/GoodsContext";

const Cart = () => {
  const goodsContext = useContext(GoodsContext);
  const selected = goodsContext.goods.filter(
    (goods) => goods.selected === true
  );

  
  let cartContainer = [];
  let cartGoodsImages = [];
  let cartGoodsName = [];
  let cartGoodsColor = [];
  let cartGoodsPrice = [];
  let totalPrice = 0;

  if (selected == 0){
    return <div>
          <h1>شما هنوز کالایی را برای خرید انتخاب نکرده اید!</h1>
      </div>
  } else {
    for(let i = 0; i < selected.length; i++){
      cartContainer[i] = React.createElement('div', {key : selected[i].key}, 
        cartGoodsImages[i] = React.createElement('img', {alt : 'lorem', src : `${selected[i].price}`}),
        cartGoodsName[i] = React.createElement('h1', {}, `${selected[i].name}`),
        cartGoodsColor[i] = React.createElement('h6', {}, `${selected[i].color}`),
        cartGoodsPrice[i] = React.createElement('h4', {}, `${selected[i].price}`)
      )
      totalPrice += Number(selected[i].price);
    }
  }

  console.log(totalPrice)
  
  return(
    <div>
      {cartContainer}
      <h1>جمع مبالغ</h1>
      <h2>{totalPrice}</h2>
    </div>
  ) ;

};

export default Cart;
