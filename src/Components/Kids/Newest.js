import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const kidsGoods = goodsContext.goods.filter(good => good.type === 'kids');
    const goods = kidsGoods.filter(good => good.inventory === true);

    for (let i = 0; i < 4; i++) {
        return(
            <div>
                <img alt='lorem' src={goods[i].src} />
                <h6>موجود</h6>
                <h6>{goods[i].price}</h6>
            </div>
        )
        
    }
};

export default Newest;