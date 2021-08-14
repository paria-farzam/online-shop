import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const menGoods = goodsContext.goods.filter(good => good.type === 'male');
    const goods = menGoods.filter(good => good.inventory === true);

    let newestsContainer = [];
    let newestImage = [];
    let newestInventory = [];
    let newestPrice = [];

    for (let i = 0; i < 4; i++) {
        
        newestsContainer[i] = React.createElement('div', {key : goods[i].key},
            newestImage[i] = React.createElement('img', {alt : 'lorem', src : `${goods[i].src}`}),
            newestInventory[i] = React.createElement('h6', {} , 'موجود'),
            newestPrice[i] = React.createElement('h6', {}, goods[i].price)
        );
        
    }
    
    return newestsContainer;
};

export default Newest;