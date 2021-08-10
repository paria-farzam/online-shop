import React from 'react';

const GoodsContext = React.createContext({
    goods : [],
    goodsDispatch : ()=>{}
})

export default GoodsContext;