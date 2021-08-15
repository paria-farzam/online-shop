import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoodsContext from '../../Contexts/GoodsContext';

const BestSeller = () => {

    const goodsContext = useContext(GoodsContext);
    const goods =  goodsContext.goods;
    const bestSellers = goods.filter(goods => goods.inventory === true).sort((goods, others) => (goods.buy < others.buy ? 1 : -1));

    // let bestsContainer = [];
    // let bestImage = [];
    // let bestInventory = [];
    // let bestPrice = [];

    // for (let i = 0; i < 4; i++) {
        
    //     bestsContainer[i] = React.createElement('div', {key : bestSellers[i].key},
    //     bestImage[i] = React.createElement('img', {alt : 'lorem', src : `${bestSellers[i].src}`}),
    //     bestInventory[i] = React.createElement('h6', {} , 'موجود'),
    //     bestPrice[i] = React.createElement('h6', {}, bestSellers[i].price)
    //     );
        
    // }
    
    return(
        <div>
            <Link to={`/goods/${bestSellers[0].key}`}>
                <img src={bestSellers[0].src} alt={bestSellers[0].name} />
                <h3>موجود</h3>
                <h3>{bestSellers[0].price}</h3>
            </Link>
            <Link to={`/goods/${bestSellers[1].key}`}>
                <img src={bestSellers[1].src} alt={bestSellers[1].name} />
                <h3>موجود</h3>
                <h3>{bestSellers[1].price}</h3>
            </Link>
            <Link to={`/goods/${bestSellers[2].key}`}>
                <img src={bestSellers[2].src} alt={bestSellers[2].name} />
                <h3>موجود</h3>
                <h3>{bestSellers[2].price}</h3>
            </Link>
            <Link to={`/goods/${bestSellers[3].key}`}>
                <img src={bestSellers[3].src} alt={bestSellers[3].name} />
                <h3>موجود</h3>
                <h3>{bestSellers[3].price}</h3>
            </Link>
        </div>
    );
};

export default BestSeller;