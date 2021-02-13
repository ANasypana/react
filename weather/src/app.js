import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//Navigation
import { Routes } from './navigation';

//Store
import {store} from './init/store';

//Styles
import './styles/index.scss';


export const App = () => {
  return (
    <Provider store = {store}>
      <Router >
        <Routes/>
      </Router>
    </Provider>
  )
};
