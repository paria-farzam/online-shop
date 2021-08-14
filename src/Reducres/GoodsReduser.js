export default function GoodsReducer(state, action) {
  switch (action.type) {
    case 'plus-counter':
      return plusCounter(state, action);

    case 'mines-counter':
      return minesCounter(state, action);

    default:
      return state;
  }
}

//functions
const plusCounter = (state, action) => {
  let key = action.payload.key;

  const changedGoods = state.goods.find(good => good.key === key);
  changedGoods.goodsCounter++;
  changedGoods.selected = true;
  const otherGoods = state.goods.filter(good => good.key !== key);

  return {
    ...state,
    goods : [
      ...otherGoods,
      changedGoods
    ]
  }
}

const minesCounter = (state, action) => {
  let key = action.payload.key;

  const changedGoods = state.goods.find(good => good.key === key);
  changedGoods.goodsCounter--;
  const otherGoods = state.goods.filter(good => good.key !== key);

  return {
    ...state,
    goods : [
      ...otherGoods,
      changedGoods
    ]
  }
}