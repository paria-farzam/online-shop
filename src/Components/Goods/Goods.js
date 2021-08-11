import React from 'react';

const Goods = (props) => {
    return (
        <div>
            <img src={props.src} alt='lorem' />
            <div>
                <h5>{props.inventory}</h5>
                <h5>تومان {props.price}</h5>
            </div>
        </div>
    );
};

export default Goods;