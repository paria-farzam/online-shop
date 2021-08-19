import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoodsContext from '../../Contexts/GoodsContext';
import './mobile.css';

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
        <div className='homeGoods m-0 row justify-content-around'>
            <Link className='col-6 p-0 row text-decoration-none text-muted Home-Links m-2 pt-1 px-2' to={`/goods/${bestSellers[0].key}`}>
                <img className='col-12' src={bestSellers[0].src} alt={bestSellers[0].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{bestSellers[0].price}</h3>
            </Link>
            <Link className='col-6 p-0 row text-decoration-none text-muted Home-Links m-2 pt-1 px-2' to={`/goods/${bestSellers[1].key}`}>
                <img className='col-12' src={bestSellers[1].src} alt={bestSellers[1].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{bestSellers[1].price}</h3>
            </Link>
            <Link className='col-6 p-0 row text-decoration-none text-muted Home-Links m-2 pt-1 px-2' to={`/goods/${bestSellers[2].key}`}>
                <img className='col-12' src={bestSellers[2].src} alt={bestSellers[2].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{bestSellers[2].price}</h3>
            </Link>
            <Link className='col-6 p-0 row text-decoration-none text-muted Home-Links m-2 pt-1 px-2' to={`/goods/${bestSellers[3].key}`}>
                <img className='col-12' src={bestSellers[3].src} alt={bestSellers[3].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{bestSellers[3].price}</h3>
            </Link>
        </div>
    );
};

export default BestSeller;