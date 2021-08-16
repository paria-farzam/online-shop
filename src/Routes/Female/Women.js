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
                    <img src='https://i.pinimg.com/564x/ad/b3/8a/adb38af9ff50d806e065c6143b04a84f.jpg' alt='lorem' />
                    <h6>پیراهن</h6>
                </Link>
                <Link to='/FTShirt'>
                    <img src='https://i.pinimg.com/564x/35/b2/d7/35b2d759ec0e4039ba16604be36d3028.jpg' alt='lorem' />
                    <h6>تیشرت</h6>
                </Link>
                <Link to='/FSkirt'>
                    <img src='https://i.pinimg.com/564x/6c/78/64/6c786491479389e65fea6d65ef30d0bd.jpg' alt='lorem' />
                    <h6>دامن</h6>
                </Link>
                <Link to='/FPants'>
                    <img src='https://i.pinimg.com/564x/cf/ad/75/cfad750da111c19af5960fedccf6c119.jpg' alt='lorem' />
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