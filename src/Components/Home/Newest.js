import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const goods = goodsContext.goods.filter(good => good.inventory === true);
    console.log('goods = ',goods);

    return (
        <div>
            <div>
                <h1>جدیدترین ها:</h1>
                <a>همه</a>
            </div>
            <div>
                <img src={goods[0].src} />
                <h6>موجود</h6>
                <h6>{goods[0].price}</h6>
            </div>
            <div>
                <img src={goods[1].src} />
                <h6>موجود</h6>
                <h6>{goods[1].price}</h6>
            </div>
            <div>
                <img src={goods[2].src} />
                <h6>موجود</h6>
                <h6>{goods[2].price}</h6>
            </div>
            <div>
                <img src={goods[3].src} />
                <h6>موجود</h6>
                <h6>{goods[3].price}</h6>
            </div>
        </div>
    );
};

export default Newest;