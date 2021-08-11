import React, { useContext } from 'react';
import Goods from '../../Components/Goods/Goods';
import GoodsContext from '../../Contexts/GoodsContext';
import NotAvailable from '../NotAvailable';

const KTShirt = () => {

    const goodsContext = useContext(GoodsContext);
    const Tshirts = goodsContext.goods.filter(good => good.type === 'kids').filter(good => good.category === 'Tshirt');

    if (Tshirts.length > 0){
        return Tshirts.map(Tshirt => <Goods src={Tshirt.src} inventory={Tshirt.inventory} price={Tshirt.price} key={Tshirt.key} /> )
    } else {
        return <NotAvailable />
    }

};

export default KTShirt;