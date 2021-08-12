import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const KShirt = () => {

    const goodsContext = useContext(GoodsContext);
    const shirts = goodsContext.goods.filter(good => good.type === 'kids').filter(good => good.category === 'shirt');

    if (shirts.length > 0){
        return shirts.map(shirt => <Goods good={shirt} key={shirt.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default KShirt;