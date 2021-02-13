import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Navigation
import { book } from './book';

import { TodoManager } from "../bus/todo";
import { DefaultPage } from '../common/layout/defaultPage';
import {Footer} from '../common/layout/footer';


export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={book.root} render={() => <DefaultPage />}/>
        <Route path={book.todo} render={() => <TodoManager />}/>
        <Route render={() => <DefaultPage/>} />
      </Switch>
      <Footer />
    </>
  )
}