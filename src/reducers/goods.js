import { initialState } from "./initialStates/goodsInitialState";

const goods = (state = initialState, action) => {
  switch (action.key) {
    case "plus-counter":
      return plusCounter(state, action);

    case "mines-counter":
      return minesCounter(state, action);

    case "selected-false":
      return removeCardItem(state, action);

    default:
      return state;
  }
};

export default goods;

//functions
const plusCounter = (state, action) => {
  let key = action.key;
  const changedGoods = state.find((good) => good.key === key);
  changedGoods = {
    ...changedGoods,
    goodsCounter: changedGoods.goodsCounter++,
    selected: true,
  };
  //   changedGoods.goodsCounter++;
  //   changedGoods.selected = true;
  const otherGoods = state.filter((good) => good.key !== key);
  return [...otherGoods, changedGoods];
};

const minesCounter = (state, action) => {
  let key = action.key;

  const changedGoods = state.find((good) => good.key === key);
  changedGoods = { ...changedGoods, goodsCounter: changedGoods.goodsCounter-- };
  if (changedGoods.goodsCounter === 0) {
    changedGoods = { ...changedGoods, selected: false };
  }

  //   changedGoods.goodsCounter--;
  const otherGoods = state.filter((good) => good.key !== key);

  return [...otherGoods, changedGoods];
};

const removeCardItem = (state, action) => {
  let key = action.key;

  const removedItem = state.find((good) => good.key === key);
  removedItem = { ...removedItem, selected: false, goodsCounter: 0 };
  //   removedItem.selected = false;
  //   removedItem.goodsCounter = 0;

  const otherGoods = state.filter((good) => good.key !== key);

  return [...otherGoods, removedItem];
};
