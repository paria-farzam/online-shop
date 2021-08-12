import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const KSocks = () => {

    const goodsContext = useContext(GoodsContext);
    const sockses = goodsContext.goods.filter(good => good.type === 'kids').filter(good => good.category === 'socks');

    if (sockses.length > 0){
        return sockses.map(socks => <Goods goods={socks} key={socks.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default KSocks;