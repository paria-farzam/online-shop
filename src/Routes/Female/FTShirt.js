import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const FTShirt = () => {

    const goodsContext = useContext(GoodsContext);
    const tShirts = goodsContext.goods.filter(good => good.type === 'female').filter(good => good.category === 'Tshirt');

    if (tShirts.length > 0){
        return tShirts.map(Tshirt => <Goods goods={Tshirt} key={Tshirt.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default FTShirt;