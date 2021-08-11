import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const menGoods = goodsContext.goods.filter(good => good.type === 'male');
    const goods = menGoods.filter(good => good.inventory === true);

    return (
        <div>
            <div>
                <h1>جدیدترین ها:</h1>
            </div>
            <div>
                <img alt='lorem' src={goods[0].src} />
                <h6>موجود</h6>
                <h6>{goods[0].price}</h6>
            </div>
            <div>
                <img alt='lorem' src={goods[1].src} />
                <h6>موجود</h6>
                <h6>{goods[1].price}</h6>
            </div>
            <div>
                <img alt='lorem' src={goods[2].src} />
                <h6>موجود</h6>
                <h6>{goods[2].price}</h6>
            </div>
            <div>
                <img alt='lorem' src={goods[3].src} />
                <h6>موجود</h6>
                <h6>{goods[3].price}</h6>
            </div>
        </div>
    );
};

export default Newest;