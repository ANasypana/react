import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//Navigation
import { Routes } from './navigation';
import { history } from './navigation/history';

//Store
import { store } from './init/store';

//Styles
import './theme/index.scss';



export const App = () => {
  return (
    <Provider store = {store}>
      <Router history={history} >
        <Routes/>
      </Router>
    </Provider>
  )
};
