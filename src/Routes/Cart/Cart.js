import React, { useContext } from "react";
import GoodsContext from "../../Contexts/GoodsContext";
import "./styles.css";

const Cart = () => {
  const goodsContext = useContext(GoodsContext);
  let selected = goodsContext.goods.filter((goods) => goods.selected === true);

  let counter = document.querySelector("#counter");

  const plusGoods = (key, number) => {
    counter.innerHTML = Number(counter.innerHTML);
    if (number != counter.innerHTML) {
      counter.innerHTML++;
      goodsContext.goodsDispatch({
        type: "plus-counter",
        payload: { key: key },
      });
    }
  };

  const minesGoods = (key, index) => {
    if (selected[index].goodsCounter > 1) {
      counter.innerHTML--;
      console.log("mines");
      goodsContext.goodsDispatch({
        type: "mines-counter",
        payload: { key: key },
      });
    } else {
      removeSelectedGoods(key, index);
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
  let infoContainer = [];
  let cartGoodsImages = [];
  let cartGoodsName = [];
  // let cartGoodsColor = [];
  let cartGoodsPrice = [];
  let counterContainer = [];
  let plusBtn = [];
  let counterNum = [];
  let minesBtn = [];
  let removeGoodsBtn = [];
  let totalPrice = 0;

  if (selected.length > 0) {
    for (let i = 0; i < selected.length; i++) {
      cartContainer[i] = React.createElement(
        "div",
        {
          key: selected[i].key,
          className: "goods-info-container d-flex flex-row mb-3",
        },
        (cartGoodsImages[i] = React.createElement("img", {
          className: "goods-img",
          alt: "lorem",
          src: `${selected[i].src}`,
        })),
        (infoContainer[i] = React.createElement(
          "div",
          {},
          (cartGoodsName[i] = React.createElement(
            "h1",
            {},
            `${selected[i].name}`
          )),
          // (cartGoodsColor[i] = React.createElement(
          //   "h3",
          //   {},
          //   `${selected[i].color}`
          // )),
          (cartGoodsPrice[i] = React.createElement(
            "h3",
            { className: "mt-2 mb-0 py-auto" },
            <span className="text-success fs-4">
              <strong>&#10023;</strong>
            </span>,
            `${selected[i].price} تومان`
          )),
          (counterContainer[i] = React.createElement(
            "div",
            {
              id: "plusMines",
              className:
                "mines-plus-container d-flex justify-content-center align-items-center my-2",
            },
            (plusBtn[i] = React.createElement(
              "button",
              {
                onClick: () => plusGoods(selected[i].key, selected[i].number),
                className: "mines-plus p-0 fs-4 m-auto",
              },
              "+"
            )),
            (counterNum[i] = React.createElement(
              "p",
              { className: "my-0 mx-2 buy-counter text-center" },
              `${selected[i].goodsCounter}`
            )),
            (minesBtn[i] = React.createElement(
              "button",
              {
                onClick: () => minesGoods(selected[i].key, i),
                className: "mines-plus p-0 fs-4 m-auto",
              },
              "-"
            ))
          )),
          (removeGoodsBtn[i] = React.createElement(
            "button",
            {
              onClick: () => removeSelectedGoods(selected[i].key, i),
              className: "remove-btn px-2 py-1 mt-1 d-inline",
            },
            "حذف  ",
            <img
              className="remove-btn"
              src="https://img.icons8.com/fluency-systems-filled/48/ffffff/delete.png"
            />
          )),
          <hr className="w-100 text-muted mx-auto" />
        ))
      );

      totalPrice += Number(selected[i].price) * selected[i].goodsCounter;
    }
  } else {
    return (
      <div className="empty-card d-flex align-content-center">
        <h1 className="m-auto px-2 py-3 fs-4">
          شما هنوز کالایی را برای خرید انتخاب نکرده اید!
        </h1>
      </div>
    );
  }

  const buySelectedGoods = () => {
    return null;
  };

  console.log(selected)
  return (
    <div className="main-container">
      <h1 className="p-2 titr d-flex justify-content-center">لیست خرید</h1>
      {cartContainer}
      <div className="btn-price-container mx-auto">
        <div className="d-flex flex-row align-content-center fs-3">
          <h2>جمع مبالغ:</h2>
          <h3 className="px-2 d-flex align-content-center">
            {totalPrice} تومان
          </h3>
        </div>
        <button className="final-buy px-2 py-1" onClick={buySelectedGoods}>
          تکمیل فرایند خرید
        </button>
      </div>
    </div>
  );
};

export default Cart;
