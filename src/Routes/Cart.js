import React, { useContext, useState } from "react";
import GoodsContext from "../Contexts/GoodsContext";

const Cart = () => {
  const goodsContext = useContext(GoodsContext);
  let selected = goodsContext.goods.filter(
    (goods) => goods.selected === true
  );
  const [render, setRender] = useState(false);

  let counter = document.querySelector("#counter");

 const plusGoods = (key) => {
    counter.innerHTML = Number(counter.innerHTML);
    counter.innerHTML++;
    goodsContext.goodsDispatch({ type: "plus-counter", payload: { key: key } });
  };

  const minesGoods = (key, index) => {
    if(counter.innerHTML < 2){
      removeSelectedGoods(key, index);
    } else {
      counter.innerHTML--;
      goodsContext.goodsDispatch({type : 'mines-counter', payload : {key : key}});
    }
  }; 

  const removeSelectedGoods = (key, index) => {
    counter.innerHTML -= selected[index].goodsCounter;
    goodsContext.goodsDispatch({
      type: "selected-false",
      payload: { key: key },
    });
  };

  let cartContainer = [];
  let cartGoodsImages = [];
  let cartGoodsName = [];
  let cartGoodsColor = [];
  let cartGoodsPrice = [];
  let counterContainer = [];
  let plusBtn = [];
  let counterNum = [];
  let minesBtn = [];
  let removeGoodsBtn = [];
  let totalPrice = 0;

  if(selected.length > 0){
    for(let i = 0; i < selected.length; i++){
      cartContainer[i] = React.createElement('div', {key : selected[i].key}, 
        cartGoodsImages[i] = React.createElement('img', {alt : 'lorem', src : `${selected[i].src}`}),
        cartGoodsName[i] = React.createElement('h1', {}, `${selected[i].name}`),
        cartGoodsColor[i] = React.createElement('h3', {}, `${selected[i].color}`),
        cartGoodsPrice[i] = React.createElement('h3', {}, `${selected[i].price}`),
        counterContainer[i] = React.createElement('div', {id : 'plusMines'}, 
          plusBtn[i] = React.createElement('button', {onClick : ()=>plusGoods(selected[i].key)}, '+'),
          counterNum[i] = React.createElement('p', {}, `${selected[i].goodsCounter}`),
          minesBtn[i] = React.createElement('button', {onClick : ()=>minesGoods(selected[i].key, i)}, '-')
        ),
        removeGoodsBtn[i] = React.createElement('button', {onClick : ()=>removeSelectedGoods(selected[i].key, i)}, 'حذف از سبد خرید')
      )

      totalPrice += Number(selected[i].price);
    }
  } else {
    return <div>
      <h1>شما هنوز کالایی را برای خرید انتخاب نکرده اید!</h1>
    </div>
  }

  return (
    <div>
      {cartContainer}
      <h2>جمع مبالغ</h2>
      <h3>{totalPrice}</h3>
    </div>
  );
};

export default Cart;
