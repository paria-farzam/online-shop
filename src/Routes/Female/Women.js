import React from 'react';
import { Link } from 'react-router-dom';
import BestSeller from '../../Components/Women/BestSeller';
import Newest from '../../Components/Women/Newest';

const Women = () => {
    return (
        <div>
            <div>
                <Link to='/'>خانه</Link>
            </div>
            <div>
                <Link to='/FShirt'>
                    <img src='images/lorem.png' alt='lorem' />
                    <h6>پیراهن</h6>
                </Link>
                <Link to='/FTShirt'>
                    <img src='images/lorem.png' alt='lorem' />
                    <h6>تیشرت</h6>
                </Link>
                <Link to='/FSkirt'>
                    <img src='images/lorem.png' alt='lorem' />
                    <h6>دامن</h6>
                </Link>
                <Link to='/FPants'>
                    <img src='images/lorem.png' alt='lorem' />
                    <h6>شلوار</h6>
                </Link>
            </div>
            <div>
                <h1>جدیدترین ها</h1>
                <Newest />
            </div>
            <div>
                <h1>پرفروش ترین ها</h1>
                <BestSeller />
            </div>
        </div>
    );
};

export default Women;