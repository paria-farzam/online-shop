import React, { useContext } from 'react';
import GoodsContext from '../../Contexts/GoodsContext';

const BestSeller = () => {

    const goodsContext = useContext(GoodsContext);
    const goods =  goodsContext.goods;
    const bestSellers = goods.sort((goods, others) => (goods.buy < others.buy ? 1 : -1));

    for (let i = 0; i < 10; i++) {
        console.log(`this is ${i}`)
        return(
            <div>
                this is not mine
            </div>
        )
        
    }

    for (let i = 0; i < 4; i++) {
        return(
            <div>
                <img alt='lorem' src={bestSellers[i].src} />
                <h6>موجود</h6>
                <h6>{bestSellers[i].price}</h6>
            </div>
        )
    }

    // return (
    //     <div>
    //         <div>
    //             <h1>پرفروش ترین ها:</h1>
    //         </div>
    //         <div>
    //             <img alt='lorem' src={bestSellers[0].src} />
    //             <h6>موجود</h6>
    //             <h6>{bestSellers[0].price}</h6>
    //         </div>
    //         <div>
    //             <img alt='lorem' src={bestSellers[1].src} />
    //             <h6>موجود</h6>
    //             <h6>{bestSellers[1].price}</h6>
    //         </div>
    //         <div>
    //             <img alt='lorem' src={bestSellers[2].src} />
    //             <h6>موجود</h6>
    //             <h6>{bestSellers[2].price}</h6>
    //         </div>
    //         <div>
    //             <img alt='lorem' src={bestSellers[3].src} />
    //             <h6>موجود</h6>
    //             <h6>{bestSellers[3].price}</h6>
    //         </div>
    //     </div>
    // );
};

export default BestSeller;