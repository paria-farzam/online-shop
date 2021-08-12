import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const KPants = () => {

    const goodsContext = useContext(GoodsContext);
    const pantses = goodsContext.goods.filter(good => good.type === 'kids').filter(good => good.category === 'pants');

    if (pantses.length > 0){
        return pantses.map(pants => <Goods goods={pants} key={pants.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default KPants;