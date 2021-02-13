import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Navigation
import { book } from './book';

import { Forecast } from "../bus/forecast";
import { DefaultPage } from "../common/layout/defaultPage";


export const Routes = () => {
  return (
    <Switch>
      <Route exact path={book.root} render={() => <DefaultPage />}/>
      <Route path={book.weather} render={() => <Forecast />}/>
      <Route render={() => <DefaultPage/>} />
    </Switch>
  )
}