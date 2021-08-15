import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoodsContext from '../../Contexts/GoodsContext';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const kidsGoods = goodsContext.goods.filter(good => good.type === 'kids').slice().sort((a, b) => b.date > a.date ? 1: -1);
    const goods = kidsGoods.filter(good => good.inventory === true);

    // let newestsContainer = [];
    // let newestImage = [];
    // let newestInventory = [];
    // let newestPrice = [];

    // for (let i = 0; i < 4; i++) {
        
    //     newestsContainer[i] = React.createElement('div', {key : goods[i].key},
    //         newestImage[i] = React.createElement('img', {alt : 'lorem', src : `${goods[i].src}`}),
    //         newestInventory[i] = React.createElement('h6', {} , 'موجود'),
    //         newestPrice[i] = React.createElement('h6', {}, goods[i].price)
    //     );
        
    // }
    
    return(
        <div>
            <Link to={`/goods/${goods[0].key}`}>
                <img src={goods[0].src} alt={goods[0].name} />
                <h3>موجود</h3>
                <h3>{goods[0].price}</h3>
            </Link>
            <Link to={`/goods/${goods[1].key}`}>
                <img src={goods[1].src} alt={goods[1].name} />
                <h3>موجود</h3>
                <h3>{goods[1].price}</h3>
            </Link>
            <Link to={`/goods/${goods[2].key}`}>
                <img src={goods[2].src} alt={goods[2].name} />
                <h3>موجود</h3>
                <h3>{goods[2].price}</h3>
            </Link>
            <Link to={`/goods/${goods[3].key}`}>
                <img src={goods[3].src} alt={goods[3].name} />
                <h3>موجود</h3>
                <h3>{goods[3].price}</h3>
            </Link>
        </div>
    );
};

export default Newest;