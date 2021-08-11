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
    users: []
  });
  
  const [goodsState, goodsDispatch] = useReducer(GoodsReducer, {
    goods: [
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'blue', type: 'female', category : 'shirt', price : 120000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'black', type:  'male', category : 'shirt', price : 240000, inventory : true, buy : 3, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'red', type:  'kids', category : 'shirt', price : 200000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 1, color : 'white', type:  'female', category : 'pants', price : 480000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'gray', type:  'male', category : 'pants', price : 500000, inventory : true, buy : 4, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 2, color : 'pink', type:  'kids', category : 'pants', price : 230000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'green', type:  'female', category : 'Tshirt', price : 100000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'purple', type:  'male', category : 'coat', price : 3000000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'brown', type:  'kids', category : 'Tshirt', price : 200000, inventory : true, buy : 2, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 1, color : 'orange', type:  'female', category : 'skirt', price : 600000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 3, color : 'yellow', type:  'male', category : 'tie', price : 320000, inventory : true, buy : 0, selected : false},
      {name : 'پیراهن زرد گل گلی', src : 'images/lorem.png', number : 4, color : 'yellow', type:  'kids', category : 'socks', price : 20000, inventory : true, buy : 1, selected : false}
    ]
  });
  
  //add loadable components
  const Home = loadable(() => import("../Routes/Home"));
  const Register = loadable(() => import("../Routes/Registery"));
  const AboutUs = loadable(()=> import('../Routes/AboutUs'));
  const ContactUS = loadable(()=> import('../Routes/ContactUs'));
  const NotFound = loadable(()=> import('../Routes/NotFound'));

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
