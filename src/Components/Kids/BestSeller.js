import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const BestSeller = () => {

    const goodsContext = useContext(GoodsContext);
    const goods =  goodsContext.goods.filter(good => good.type === 'kids');
    const bestSellers = goods.sort((goods, others) => (goods.buy < others.buy ? 1 : -1));

    let bestsContainer = [];
    let bestImage = [];
    let bestInventory = [];
    let bestPrice = [];

    for (let i = 0; i < 4; i++) {
        
        bestsContainer[i] = React.createElement('div', {key : bestSellers[i].key},
            bestImage[i] = React.createElement('img', {alt : 'lorem', src : `${bestSellers[i].src}`}),
            bestInventory[i] = React.createElement('h6', {} , 'موجود'),
            bestPrice[i] = React.createElement('h6', {}, bestSellers[i].price)
        );
        
    }
    
    return bestsContainer;
};

export default BestSeller;