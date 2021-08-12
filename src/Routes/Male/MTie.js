import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const MTie = () => {

    const goodsContext = useContext(GoodsContext);
    const ties = goodsContext.goods.filter(good => good.type === 'male').filter(good => good.category === 'tie');

    if (ties.length > 0){
        return ties.map(tie => <Goods goods={tie} key={tie.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default MTie;