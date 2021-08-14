import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const BestSeller = () => {

    const goodsContext = useContext(GoodsContext);
    const goods =  goodsContext.goods.filter(good => good.type === 'kids');
    const bestSellers = goods.sort((goods, others) => (goods.buy < others.buy ? 1 : -1));

    for (let i = 0; i < 4; i++) {
        return(
            <div>
                <img alt='lorem' src={bestSellers[i].src} />
                <h6>موجود</h6>
                <h6>{bestSellers[i].price}</h6>
            </div>
        )
        
    }
};

export default BestSeller;