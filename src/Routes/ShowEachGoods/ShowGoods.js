import React from "react";
import { useContext, useLayoutEffect } from "react";
import { useParams } from "react-router";
import Coments from "../../Components/Coments/Coments";
import GoodsContext from "../../Contexts/GoodsContext";
import "./mobile.css";

const ShowGoods = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const goodsContext = useContext(GoodsContext);
  const params = useParams();

  const goods = goodsContext.goods.filter((good) => good.key == params.id);
  //handle buy button by goods inventory
  const buyBtnHandler = () => {
    if (goods[0].inventory) {
      if (goods[0].goodsCounter > 0) {
        return (
          <div className="mines-plus-container d-flex justify-content-center align-items-center">
            <button
              className="mines-plus p-0 fs-4 m-auto"
              onClick={() => buyGoods(goods[0].number)}
            >
              +
            </button>
            <p className="my-0 mx-2 buy-counter text-center">
              {goods[0].goodsCounter}
            </p>
            <button className="mines-plus p-0 fs-4 m-auto" onClick={minesGoods}>
              -
            </button>
          </div>
        );
      } else {
        return (
          <button
            className="add-to-cart px-3 py-2 my-auto"
            onClick={() => buyGoods(goods[0].number)}
          >
            می خرمش!
          </button>
        );
      }
    } else {
      return (
        <h5 className="text-muted not-available-text">-----ناموجود-----</h5>
      );
    }
  };

  //handle + & - buttons
  let counter = document.querySelector("#counter");

  const buyGoods = (number) => {
    counter.innerHTML = Number(counter.innerHTML);
    if (number != counter.innerHTML) {
      counter.innerHTML++;
      goodsContext.goodsDispatch({
        type: "plus-counter",
        payload: { key: goods[0].key },
      });
    }
  };
  const minesGoods = () => {
    counter.innerHTML--;
    goodsContext.goodsDispatch({
      type: "mines-counter",
      payload: { key: goods[0].key },
    });
  };

  return (
    <>
      <div className="goods-infos mx-auto row justify-content-center mt-3 mb-4 p-3">
        <img className="col-12" src={goods[0].src} alt="lorem" />
        {console.log(goods[0].src)}
        <div className="col-12 row mx-0 mt-5 mb-2 buy-info">
          <h4 className="goods-name col-12 mb-4">{goods[0].name}</h4>
          <div className="col-7">
            <h5 className="col-12 mb-1 p-0 size fs-6">
              <span className="fs-3">&#10022;</span>
              <span className="size-lable">سایز</span>
              <span>{goods[0].size}</span>
            </h5>
            <h5 className="col-12 p-0 price ml-auto fs-6">
              <span className="fs-3">&#10022;</span>
              {goods[0].price} تومان
            </h5>
          </div>
          <div className="col-5 my-auto p-0 d-flex justify-content-center">
            {buyBtnHandler()}
          </div>
        </div>
      </div>

      <Coments goodskey={goods[0].key} />
    </>
  );
};

export default ShowGoods;
