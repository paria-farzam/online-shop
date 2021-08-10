import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import GoodsContext from '../Contexts/GoodsContext';

const Cart = () => {
    const [goods, setGoods] = useState([]);

    const goodsContext = useContext(GoodsContext);

    const selectedGoods = goodsContext.goods.filter(goods => goods.selected === true);
    setGoods(selectedGoods);
    // console.log('goods',goods);

    for (let i = 0; i < selectedGoods.length; i++) {  
        return (
            <div>
                <img src={goods[i].src} />
                <div>
                    <h1>{goods[i].name}</h1>
                    <h6>{goods[i].color}</h6>
                    <h4>{goods[i].price}</h4>
                </div>
            </div>
        );
    }

};

export default Cart;