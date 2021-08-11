import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const MShirt = () => {

    const goodsContext = useContext(GoodsContext);
    const shirts = goodsContext.goods.filter(good => good.type === 'male').filter(good => good.category === 'shirt');

    if (shirts.length > 0){
        return shirts.map(shirt => <Goods src={shirt.src} inventory={shirt.inventory} price={shirt.price} key={shirt.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default MShirt;