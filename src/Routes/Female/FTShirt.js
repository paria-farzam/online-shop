import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const FTShirt = () => {

    const goodsContext = useContext(GoodsContext);
    const tShirts = goodsContext.goods.filter(good => good.type === 'female').filter(good => good.category === 'Tshirt');

    if (tShirts.length > 0){
        return tShirts.map(Tshirt => <Goods src={Tshirt.src} inventory={Tshirt.inventory} price={Tshirt.price} /> )
    } else {
        return <NotAvailable />
    }

};

export default FTShirt;