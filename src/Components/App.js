import { BrowserRouter, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";
import Header from "./Header/Header";

//import context & reducer
import RegisteryContext from "../Contexts/RegisteryContext";
import { useReducer } from "react";
import RegisteryReducer from "../Reducres/RegisteryReducer";
import GoodsReducer from "../Reducres/GoodsReduser";
import GoodsContext from "../Contexts/GoodsContext";

function App() {
  // add Context and reducer
  const [state, dispatch] = useReducer(RegisteryReducer, {
    users: []
  });
  
  const [goodsState, goodsDispatch] = useReducer(GoodsReducer, {
    goods: [
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'blue', type: 'femail', category : 'shirt', price : 120000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'black', type:  'male', category : 'shirt', price : 240000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'red', type:  'kids', category : 'shirt', price : 200000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 1, color : 'white', type:  'femail', category : 'pants', price : 480000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'gray', type:  'male', category : 'pants', price : 500000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'pink', type:  'kids', category : 'pants', price : 230000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'green', type:  'femail', category : 'Tshirt', price : 100000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'purple', type:  'male', category : 'coat', price : 3000000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'brown', type:  'kids', category : 'Tshirt', price : 200000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 1, color : 'orange', type:  'femail', category : 'skirt', price : 600000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'yellow', type:  'male', category : 'tie', price : 320000, inventory : true, buy : 0, selected : false}
    ]
  });
  
  console.log(goodsState.goods)
  //add loadable components
  const Home = loadable(() => import("../Routes/Home"));
  const Register = loadable(() => import("../Routes/Registery"));

  return (
    <GoodsContext.Provider value={{goods : goodsState.goods, goodsDispatch }}>
      <RegisteryContext.Provider value={{ users: state.users, dispatch }}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          {/* <Route path='/women' component={} /> */}
          {/* <Route path='/men' component={} /> */}
          {/* <Route path='/kids' component={} /> */}
        </BrowserRouter>
      </RegisteryContext.Provider>
    </GoodsContext.Provider>
  );
}

export default App;
