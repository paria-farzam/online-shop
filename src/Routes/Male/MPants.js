import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const MPants = () => {

    const goodsContext = useContext(GoodsContext);
    const pantses = goodsContext.goods.filter(good => good.type === 'male').filter(good => good.category === 'pants');

    if (pantses.length > 0){
        return pantses.map(pants => <Goods src={pants.src} inventory={pants.inventory} price={pants.price} key={pants.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default MPants;