import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import {actionCreators} from '../../actionCreators'
import './mobile.css';

const Goods = (props) => {
  let counter = document.querySelector("#counter");
  const dispatch = useDispatch();
  const { increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch)

  //handle + & - buttons
  const buyGoods = (number) => {
    counter.innerHTML = Number(counter.innerHTML);
    if (number != counter.innerHTML) {
      counter.innerHTML++;
      increaseCounter(props.goods.key);
    }
  };
  const minesGoods = () => {
    counter.innerHTML--;
    decreaseCounter(props.goods.key);
  };

  //handle buy button and goods inventory
  const buyBtnHandler = () => {
    if(props.goods.inventory){
      if (props.goods.goodsCounter > 0){
        return  <div className="d-flex justify-content-center align-items-center mines-plus-container">
        <button className='mines-plus p-0 fs-4 m-auto' onClick={() => buyGoods(props.goods.number)}>
          +
        </button>
        <p className='my-0 mx-2 buy-counter text-center'>{props.goods.goodsCounter}</p>
        <button className='mines-plus p-0 fs-4 m-auto' onClick={minesGoods}>-</button>
      </div>
      } else {
        return <button
        className="add-to-cart px-3 py-2"
        onClick={() => buyGoods(props.goods.number)}
      >
        همینو می خوامش!
      </button>
      }
    } else {
      return <h5 className='text-muted not-available-text'>-----ناموجود-----</h5>
    }
  }

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
        <h5 className='mb-1 fs-6'><span className='text-warning'><i className="fas fa-ruler-vertical mr-2"></i></span> سایز: {props.goods.size}</h5>
        <h5 className="mb-4 fs-6"><span className='text-success fs-3'><i className="fas fa-dollar-sign"></i></span>  {props.goods.price} تومان</h5>
        <div className="my-auto ">
          {buyBtnHandler()}
        </div>
      </div>
    </div>
  );
};

export default Goods;
