import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const FSkirt = () => {

    const goodsContext = useContext(GoodsContext);
    const skirts = goodsContext.goods.filter(good => good.type === 'female').filter(good => good.category === 'skirt');

    if (skirts.length > 0){
        return skirts.map(skirt => <Goods goods={skirt} key={skirt.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default FSkirt;