import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from "redux-thunk";


const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
