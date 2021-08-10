import { BrowserRouter, Route } from 'react-router-dom';
import loadable from '@loadable/component'
import './App.css';
import Header from './Header/Header';

//import context & reducer
import RegisteryContext from '../Contexts/RegisteryContext';
import { useContext, useReducer } from 'react';
import RegisteryReducer from '../Reducres/RegisteryReducer';

function App() {

  // add Context and reducer
  const registeryContext = useContext(RegisteryContext);
  const [state, dispatch] = useReducer(RegisteryReducer, {
      users : []
    })
    console.log(registeryContext)

  //add loadable components
  const Home = loadable(()=> import('../Routes/Home'));
  const Register = loadable(()=> import('../Routes/Registery'));

  return (

    <RegisteryContext.Provider value={{users : state.users, dispatch}}>
      <BrowserRouter>

        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />

      </BrowserRouter>
    </RegisteryContext.Provider>

  );
}

export default App;