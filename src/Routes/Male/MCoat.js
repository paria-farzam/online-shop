import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const MCoat = () => {

    const goodsContext = useContext(GoodsContext);
    const coats = goodsContext.goods.filter(good => good.type === 'male').filter(good => good.category === 'coat');

    if (coats.length > 0){
        return coats.map(coat => <Goods src={coat.src} inventory={coat.inventory} price={coat.price} key={coat.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default MCoat;