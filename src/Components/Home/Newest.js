import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoodsContext from '../../Contexts/GoodsContext';
import './mobile.css';

const Newest = () => {

    const goodsContext = useContext(GoodsContext);
    const newGoods = goodsContext.goods.slice().sort((a, b) => b.date > a.date ? 1: -1);
    const goods = newGoods.filter(good => good.inventory === true);

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
        <div className='homeGoods row m-0 justify-content-around'>
            <Link className='col-6 p-0 row px-2 text-decoration-none text-muted Home-Links m-2 pt-1' to={`/goods/${goods[0].key}`}>
                <img className='col-12' src={goods[0].src} alt={goods[0].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{goods[0].price}</h3>
            </Link>
            <Link className='col-6 p-0 row px-2 text-decoration-none text-muted Home-Links m-2 pt-1' to={`/goods/${goods[1].key}`}>
                <img className='col-12' src={goods[1].src} alt={goods[1].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{goods[1].price}</h3>
            </Link>
            <Link className='col-6 p-0 row px-2 text-decoration-none text-muted Home-Links m-2 pt-1' to={`/goods/${goods[2].key}`}>
                <img className='col-12' src={goods[2].src} alt={goods[2].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{goods[2].price}</h3>
            </Link>
            <Link className='col-6 p-0 row px-2 text-decoration-none text-muted Home-Links m-2 pt-1' to={`/goods/${goods[3].key}`}>
                <img className='col-12' src={goods[3].src} alt={goods[3].name} />
                <h3 className='col-6 fs-5 px-0'>موجود</h3>
                <h3 className='col-6 fs-6 align-self-end px-0 text-start'>{goods[3].price}</h3>
            </Link>
        </div>
    );

};

export default Newest;