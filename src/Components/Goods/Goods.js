import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoodsContext from "../../Contexts/GoodsContext";

const Goods = (props) => {
  let counter = document.querySelector("#counter");
  const goodsContext = useContext(GoodsContext);
  const [inventory, setInventory] = useState("موجود");

  if (!props.goods.inventory) {
    setInventory("ناموجود");
  }

  const buyGoods = (number) => {
    counter.innerHTML = Number(counter.innerHTML);
    if (number != counter.innerHTML) {
      counter.innerHTML++;
      goodsContext.goodsDispatch({
        type: "plus-counter",
        payload: { key: props.goods.key },
      });
    }
  };

  const minesGoods = () => {
    counter.innerHTML--;
    goodsContext.goodsDispatch({
      type: "mines-counter",
      payload: { key: props.goods.key },
    });
  };

  return (
    <div className="goods-area col-12 p-0 row mx-2 my-3 pb-2">
      <Link
        className="goods text-decoration-none text-dark p-0 col-6"
        to={`/goods/${props.goods.key}`}
        goods={props.goods}
      >
        <img className="" src={props.goods.src} alt="lorem" />
      </Link>
      <div className="col-6 d-flex flex-column goods-info p-0">
        <p className="mt-4 mb-1 text-justify d-inline text-bold">{props.goods.name}</p>
        <h5 className="mb-4 fs-6"><span className='text-success fs-3'>$</span>  {props.goods.price} تومان</h5>
        <div className="d-flex ">
          {props.goods.inventory ? (
            <div>
              {props.goods.goodsCounter > 0 ? (
                <div className="d-flex justify-content-center">
                  <button onClick={() => buyGoods(props.goods.number)}>
                    +
                  </button>
                  <p>{props.goods.goodsCounter}</p>
                  <button onClick={minesGoods}>-</button>
                </div>
              ) : (
                <button
                  className="add-to-cart px-3 py-2"
                  onClick={() => buyGoods(props.goods.number)}
                >
                  همینو می خوامش!
                </button>
              )}
            </div>
          ) : (
            <h1>ناموجود</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Goods;
