import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";
import Header from "./LayOut/Header/Header";

//import context & reducer
import RegisteryContext from "../Contexts/RegisteryContext";
import { useReducer } from "react";
import RegisteryReducer from "../Reducres/RegisteryReducer";
import GoodsReducer from "../Reducres/GoodsReduser";
import GoodsContext from "../Contexts/GoodsContext";
import Footer from "./LayOut/Footer/Footer";

function App() {
  // add Context and reducer
  const [state, dispatch] = useReducer(RegisteryReducer, {
    users: [{name : 'پریا', phoneNum : '09159796944', pass : '1234'},
      {name : 'حمیده', phoneNum : '09151234525', pass : '1234'},
      {name : 'شیرین', phoneNum : '09350648585', pass : '1234'}
    ]
  });
  
  const [goodsState, goodsDispatch] = useReducer(GoodsReducer, {
    goods: [
      {name: 'تی شرت خاکستری زنانه', src: "https://dkstatics-public.digikala.com/digikala-products/117207987.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90", type: 'female', category : 'Tshirt', number : 3, color : 'grey', size : 'M', price : 130000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-06-21'), key : 1},
      {name: 'تی شرت سفید زنانه طرح پروانه ', src: 'https://dkstatics-public.digikala.com/digikala-products/120727529.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'Tshirt', number : 2, color : 'white', size : 'S', price : 230000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-06-20'), key : 2},
      {name: 'تی شرت زنانه مدل بادی اسپینر', src: 'https://dkstatics-public.digikala.com/digikala-products/60ed4e3ffee28cd34b272aaddbdf6a02a29b7a80_1623320925.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'Tshirt', number : 0, color : 'black', size : 'XL', price : 195000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-07-22'), key : 3},
      {name: 'تی شرت زنانه طرح ویگ من', src: 'https://dkstatics-public.digikala.com/digikala-products/1bfeaa8e4ca291a050c4096871eb1d52d7df14d0_1625504561.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'Tshirt', number : 1, color : 'orange', size : 'L', price : 162000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-06-03'), key : 4},
      {name: 'شلوار زنانه مام استایل', src: 'https://dkstatics-public.digikala.com/digikala-products/6788d9f2b2b82b8d0f5759dde6f3958437e3822f_1619456708.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'pants', number : 3, color : 'blue', size : 'S', price : 210000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 5},
      {name: 'شلوار زنانه جین بادی اسپینر', src: 'https://dkstatics-public.digikala.com/digikala-products/4a98fd2a0cc20e30cbc29d2b3941063fb75d6924_1623241632.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'pants', number : 2, color : 'black', size : 'M', price : 549000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 6},
      {name: 'شلوار جین خاکستری زنانه', src: 'https://dkstatics-public.digikala.com/digikala-products/3458a24e52c51ecbc5a1be42daf9dce47e3bfaba_1619282725.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'pants', number : 0, color : 'gray', size : 'L', price : 188000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 7},
      {name: 'شلوار زنانه مانگو سفید', src: 'https://dkstatics-public.digikala.com/digikala-products/117169053.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'pants', number : 1, color : 'white', size : 'XL', price : 138000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 8},
      {name: 'دامن زنانه آبی', src: 'https://dkstatics-public.digikala.com/digikala-products/e619791981b38d0bf28bec76eba9a8752aeed849_1594153744.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'skirt', number : 4, color : 'blue', size : 'M', price : 140000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 9},
      {name: 'دامن زنانه قرمز', src: 'https://dkstatics-public.digikala.com/digikala-products/cec96010b29c6bbf53b5cc3dcd10a2276c349a37_1593842239.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'skirt', number : 3, color : 'red', size : 'L', price : 195000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 10},
      {name: 'دامن زنانه رنگارنگ', src: 'https://dkstatics-public.digikala.com/digikala-products/bf841376cca359cf8e868015b084125e62a53897_1614366017.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'skirt', number : 0, color : 'gray', size : 'S', price : 154000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 11},
      {name: 'دامن زنانه مشکی اچ اند ام', src: 'https://dkstatics-public.digikala.com/digikala-products/ca26a2266c579be839d70ba5a7280a9586380cc0_1615475416.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'skirt', number : 5, color : 'black', size : 'XL', price : 395000, inventory : true, buy : 3, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 12},
      {name: 'شومیز زنانه کیکی رایکی', src: 'https://dkstatics-public.digikala.com/digikala-products/aa4577a45ed73b97f152a17a3aad7ea2b7119330_1620478331.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'shirt', number : 2, color : 'white', size : 'S', price : 293000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-07-29'), key : 13},
      {name: 'پیراهن زنانه صورتی هاوایی', src: 'https://dkstatics-public.digikala.com/digikala-products/14610f6299ae3cf9012d14803888cdd56e54d578_1595941710.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'shirt', number : 4, color : 'pink', size : 'M', price : 195000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 14},
      {name: 'بلوز مشکی کیکی رایکی', src: 'https://dkstatics-public.digikala.com/digikala-products/934d3bafe0376fe4ea702993a45d4478e10e48e3_1620533133.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'shirt', number : 3, color : 'black', size : 'L', price : 790000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 15},
      {name: 'بلوز زرد زنانه مدل گلی', src: 'https://dkstatics-public.digikala.com/digikala-products/ced376b83c53a9381bbaf030211896392e39f0da_1628007015.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'female', category : 'shirt', number : 2, color : 'yellow', size : 'XL', price : 135000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 16},
      {name: 'ست کراوات و دستمال جیب هکس', src: 'https://dkstatics-public.digikala.com/digikala-products/112051771.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'tie', number : 3, color : 'gray', size : '', price : 66000, inventory : true, buy : 4, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 17},
      {name: 'ست کراوات دستمال جیب و پاپیون', src: 'https://dkstatics-public.digikala.com/digikala-products/bf2fa7c0a626369e6f898e5d171a53ee7b6828ce_1599422501.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'tie', number : 2, color : 'black', size : '', price : 182000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 18},
      {name: 'ست کراوات و دستمال جیب آبی', src: 'https://dkstatics-public.digikala.com/digikala-products/ba5e32e17a84a90364b595dacf348d9d7e8c3956_1611921046.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'tie', number : 4, color : 'blue', size : '', price : 95000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 19},
      {name: 'ست کراوات دستمال فرانکو روسی', src: 'https://dkstatics-public.digikala.com/digikala-products/121539300.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'tie', number : 4, color : 'red', size : '', price : 179000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 20},
      {name: 'کت مردانه مشکی', src: 'https://dkstatics-public.digikala.com/digikala-products/c504877fd0c7cfdcdb27828e7e418e2dea6331be_1604471278.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'coat', number : 2, color : 'black', size : 'S', price : 278000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 21},
      {name: 'کت مردانه بادی اسپینر سفید', src: 'https://dkstatics-public.digikala.com/digikala-products/d10cfd2ea422c6215f261ac88f24ab58559d514d_1623575970.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'coat', number : 3, color : 'white', size : 'M', price : 998000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 22},
      {name: 'کت تگ مردانه ادورا', src: 'https://dkstatics-public.digikala.com/digikala-products/5897c1625b721963a7461050605d7842ce4f50c5_1607109548.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'coat', number : 4, color : 'gray', size : 'L', price : 999000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 23},
      {name: 'کت مردانه برندس جذاب', src: 'https://dkstatics-public.digikala.com/digikala-products/8ea78635b332bfbf64f38f6f7cb7752adff62554_1606296926.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'coat', number : 3, color : 'gray', size : 'XL', price : 2000000, inventory : true, buy : 3, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 24},
      {name: 'شلوار مردانه امپریو آرمانی', src: 'https://dkstatics-public.digikala.com/digikala-products/a0f9d2b8edeff70766c72ee582fc3e94ef0f0d1b_1611732283.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'pants', number : 0, color : 'cream', size : 'S', price : 7800000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 25},
      {name: 'شلوار مردانه امپریو آرمانی', src: 'https://dkstatics-public.digikala.com/digikala-products/d0236724c76a6b83e6aab6e090733b361f9f40aa_1615879806.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'pants', number : 3, color : 'black', size : 'M', price : 7260000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 26},
      {name: 'شلوار مردانه نخی جذب کروم', src: 'https://dkstatics-public.digikala.com/digikala-products/1000000658.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'pants', number : 4, color : 'gray', size : 'L', price : 860000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 27},
      {name: 'شلوار مردانه کتان راسته یوپیم', src: 'https://dkstatics-public.digikala.com/digikala-products/cb46ea6c8e02e4fced723fe92f18b27f0563f4f7_1614406654.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'pants', number : 2, color : 'black', size : 'XL', price : 720000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 28},
      {name: 'پیراهن مردانه کیکی رایکی', src: 'https://dkstatics-public.digikala.com/digikala-products/d62ec33a1c7cba78abd9d0d4845f34248dc16ff2_1623224484.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'shirt', number : 3, color : 'gray', size : 'S', price : 1200000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-07-29'), key : 29},
      {name: 'پیراهن مردانه سورمه ای', src: 'https://dkstatics-public.digikala.com/digikala-products/121569631.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'shirt', number : 2, color : 'blue', size : 'M', price : 98000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 30},
      {name: 'پیراهن مردانه', src: 'https://dkstatics-public.digikala.com/digikala-products/117710456.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'shirt', number : 2, color : 'red', size : 'L', price : 136000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 31},
      {name: 'پیراهن مردانه امپریو آرمانی', src: 'https://dkstatics-public.digikala.com/digikala-products/117355806.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'male', category : 'shirt', number : 4, color : 'blue', size : 'XL', price : 7600000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 32},
      {name: 'جوراب بچگانه باب اسفنجی', src: 'https://dkstatics-public.digikala.com/digikala-products/1667c5f75cab6d151b8b6e214597076709775e78_1620642968.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'socks', number : 0, color : 'pink', size : '', price : 25000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 33},
      {name: 'جوراب بچگانه طرح پاندا', src: 'https://dkstatics-public.digikala.com/digikala-products/1fb76be4d5abb058cdaad1983399249da7e12d48_1624537311.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'socks', number : 4, color : 'yellow', size : '', price : 25000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 34},
      {name: 'جوراب بچگانه شازده کوچولو', src: 'https://dkstatics-public.digikala.com/digikala-products/64297fec62386823e7813d853e5a86b00ab23b89_1618944931.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'socks', number : 4, color : 'blue', size : '', price : 28000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 35},
      {name: 'جوراب بچگانه آفتابگردانی', src: 'https://dkstatics-public.digikala.com/digikala-products/fd5560b1378e2e7e12e78090c493112776f63435_1613061347.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'socks', number : 4, color : 'yellow', size : '', price : 22000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 36},
      {name: 'پیراهن بچگانه راه راه', src: 'https://dkstatics-public.digikala.com/digikala-products/120791874.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'shirt', number : 3, color : 'pink', size : 'S', price : 59000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 37},
      {name: 'پیراهن بچگانه ساده', src: 'https://dkstatics-public.digikala.com/digikala-products/d772fbe42cb9a7d27b69dc91644c1dd1b63b0b24_1612444878.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'shirt', number : 0, color : 'yellow', size : 'S', price : 98000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 38},
      {name: 'پیراهن بچگانه سانی', src: 'https://dkstatics-public.digikala.com/digikala-products/0a13be9773d981368de5e0778f7b054ce4c2b40c_1602946319.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'shirt', number : 4, color : 'yellow', size : 'M', price : 165000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 39},
      {name: 'پیراهن بچگانه داگی', src: 'https://dkstatics-public.digikala.com/digikala-products/8e9734bd781685464e7711967c155f9efb1606ad_1602680366.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'shirt', number : 3, color : 'red', size : 'M', price : 156000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 40},
      {name: 'تی شرت بچگانه جیبیجو', src: 'https://dkstatics-public.digikala.com/digikala-products/120943183.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'Tshirt', number : 3, color : 'white', size : 'S', price : 165000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 41},
      {name: 'تی شرت بچگانه گری', src: 'https://dkstatics-public.digikala.com/digikala-products/70e1719de72ae199bbbf9992f0b118337396e65a_1601052180.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'Tshirt', number : 3, color : 'gray', size : 'S', price : 80000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 42},
      {name: 'تی شرت بچگانه دراگون', src: 'https://dkstatics-public.digikala.com/digikala-products/d06451fcdc896a22dd6773f6862f91560d9c36fe_1618316177.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'Tshirt', number : 7, color : 'yellow', size : 'M', price : 240000, inventory : true, buy : 3, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 43},
      {name: 'تی شرت بچگانه استرونومی', src: 'https://dkstatics-public.digikala.com/digikala-products/b7b76c551606c9f5c32ae59ef5873181d7862d0a_1615278361.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'Tshirt', number : 0, color : 'gray', size : 'M', price : 69000, inventory : false, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 44},
      {name: 'شلوار جین بچگانه', src: 'https://dkstatics-public.digikala.com/digikala-products/d699675bbffc6f9093f1eb9da80ce09f6d5296b8_1610215075.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'pants', number : 3, color : 'blue', size : 'S', price : 79000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 45},
      {name: 'جین بچگانه پارس مهر', src: 'https://dkstatics-public.digikala.com/digikala-products/19ab667f00975409ae1c8e45aa0e3e5498a561a0_1623740530.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'pants', number : 3, color : 'blue', size : 'M', price : 185000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 46},
      {name: 'جین بچگانه آیرین', src: 'https://dkstatics-public.digikala.com/digikala-products/1a091c4b9585b994755733fc5bec064f928e2a0c_1615899302.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'pants', number : 4, color : 'cream', size : 'M', price : 450000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-04-16'), key : 47},
      {name: 'جین لش بچگانه', src: 'https://dkstatics-public.digikala.com/digikala-products/0464572d64d1036b56066e78ff5767e537d8930d_1610453315.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90', type: 'kids', category : 'pants', number : 5, color : 'blue', size : 'S', price : 460000, inventory : true, buy : 0, selected : false, goodsCounter : 0, date : new Date('2021-07-27'), key : 48}
    ]
  });
  
  //add loadable components
  const Home = loadable(() => import("../Routes/Home/Home"));
  const Register = loadable(() => import("../Routes/authenticating/Registery"));
  const AboutUs = loadable(() => import('../Routes/About/AboutUs'));
  const ContactUS = loadable(() => import('../Routes/Contact/ContactUs'));
  const ShowGoods = loadable(() => import('../Routes/ShowEachGoods/ShowGoods'));
  const NotAvailable = loadable(() => import('../Routes/NotAvailable'));
  const NotFound = loadable(() => import('../Routes/NotFound'));
  const Cart = loadable(() => import('../Routes/Cart/Cart'))

  //add loadable women components
  const Women = loadable(()=> import('../Routes/Female/Women'));
  const FShirt = loadable(()=> import('../Routes/Female/FShirt'));
  const FSkirt = loadable(()=> import('../Routes/Female/FSkirt'));
  const FPants = loadable(()=> import('../Routes/Female/FPants'));
  const FTShirt = loadable(()=> import('../Routes/Female/FTShirt'));

  //add loadable men components
  const Men = loadable(()=> import('../Routes/Male/Men'));
  const MShirt = loadable(()=> import('../Routes/Male/MShirt'));
  const MPants = loadable(()=> import('../Routes/Male/MPants'));
  const MCoat = loadable(()=> import('../Routes/Male/MCoat'));
  const MTie = loadable(()=> import('../Routes/Male/MTie'));

  //add loadable kids components
  const Kids = loadable(()=> import('../Routes/Kids/Kids'));
  const KShirt = loadable(()=> import('../Routes/Kids/KShirt'));
  const KTShirt = loadable(()=> import('../Routes/Kids/KTShirt'));
  const KPants = loadable(()=> import('../Routes/Kids/KPants'));
  const KSocks = loadable(()=> import('../Routes/Kids/KSocks'));
  
  
  return (
    <GoodsContext.Provider value={{goods : goodsState.goods, goodsDispatch }}>
      <RegisteryContext.Provider value={{ users: state.users, dispatch }}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path='/goods/:id' component={ShowGoods} />
            <Route path='/cart' component={Cart} />

            {/* women routes */}
            <Route path='/women' component={Women} />
            <Route path='/FShirt' component={FShirt} />
            <Route path='/FTShirt' component={FTShirt} />
            <Route path='/FSkirt' component={FSkirt} />
            <Route path='/FPants' component={FPants} />

            {/* men routes */}
            <Route path='/men' component={Men} />
            <Route path='/MShirt' component={MShirt} />
            <Route path='/MPants' component={MPants} />
            <Route path='/MCoat' component={MCoat} />
            <Route path='/MTie' component={MTie} />

            {/* kids routes */}
            <Route path='/kids' component={Kids} />
            <Route path='/KShirt' component={KShirt} />
            <Route path='/KTShirt' component={KTShirt} />
            <Route path='/KPants' component={KPants} />
            <Route path='/KSocks' component={KSocks} />

            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={ContactUS} />
            <Route path='/notAvailable' component={NotAvailable} />
            <Route path='/404' component={NotFound} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </RegisteryContext.Provider>
    </GoodsContext.Provider>
  );
}

export default App;
