import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";
import Header from "./LayOut/Header/Header";

//import context & reducer
import Footer from "./LayOut/Footer/Footer";

function App() {
  //add loadable components
  const Home = loadable(() => import("../Routes/Home/Home"));
  const Register = loadable(() => import("../Routes/authenticating/Registery"));
  const AboutUs = loadable(() => import("../Routes/About/AboutUs"));
  const ContactUS = loadable(() => import("../Routes/Contact/ContactUs"));
  const ShowGoods = loadable(() => import("../Routes/ShowEachGoods/ShowGoods"));
  const NotAvailable = loadable(() => import("../Routes/NotAvailable"));
  const NotFound = loadable(() => import("../Routes/404/NotFound"));
  const Cart = loadable(() => import("../Routes/Cart/Cart"));

  //add loadable women components
  const Women = loadable(() => import("../Routes/Female/Women"));
  const FShirt = loadable(() => import("../Routes/Female/FShirt"));
  const FSkirt = loadable(() => import("../Routes/Female/FSkirt"));
  const FPants = loadable(() => import("../Routes/Female/FPants"));
  const FTShirt = loadable(() => import("../Routes/Female/FTShirt"));

  //add loadable men components
  const Men = loadable(() => import("../Routes/Male/Men"));
  const MShirt = loadable(() => import("../Routes/Male/MShirt"));
  const MPants = loadable(() => import("../Routes/Male/MPants"));
  const MCoat = loadable(() => import("../Routes/Male/MCoat"));
  const MTie = loadable(() => import("../Routes/Male/MTie"));

  //add loadable kids components
  const Kids = loadable(() => import("../Routes/Kids/Kids"));
  const KShirt = loadable(() => import("../Routes/Kids/KShirt"));
  const KTShirt = loadable(() => import("../Routes/Kids/KTShirt"));
  const KPants = loadable(() => import("../Routes/Kids/KPants"));
  const KSocks = loadable(() => import("../Routes/Kids/KSocks"));

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/goods/:id" component={ShowGoods} />
        <Route path="/cart" component={Cart} />

        {/* women routes */}
        <Route path="/women" component={Women} />
        <Route path="/FShirt" component={FShirt} />
        <Route path="/FTShirt" component={FTShirt} />
        <Route path="/FSkirt" component={FSkirt} />
        <Route path="/FPants" component={FPants} />

        {/* men routes */}
        <Route path="/men" component={Men} />
        <Route path="/MShirt" component={MShirt} />
        <Route path="/MPants" component={MPants} />
        <Route path="/MCoat" component={MCoat} />
        <Route path="/MTie" component={MTie} />

        {/* kids routes */}
        <Route path="/kids" component={Kids} />
        <Route path="/KShirt" component={KShirt} />
        <Route path="/KTShirt" component={KTShirt} />
        <Route path="/KPants" component={KPants} />
        <Route path="/KSocks" component={KSocks} />

        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUS} />
        <Route path="/notAvailable" component={NotAvailable} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
