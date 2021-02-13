import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Navigation
import { book } from './book';
import { Guardian } from '../common/guardian';

//Pages
import { NotFound } from '../common/layout/notFound';

import { Home, Login, Registration, Profile, Breakfast, Lunch, Dinner,
  Fruits, Vegetables, Junk, Coffee, Steps, Sleep, Water } from './pages';


export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={book.root} render={() => <Home />}/>
        <Route path={book.login} render={() => <Login />}/>
        <Route path={book.registration} render={() => <Registration />}/>
        <Route path={book.profile} render={() => <Guardian><Profile /></Guardian>}/>
        <Route path={book.breakfast} render={() => <Guardian><Breakfast /></Guardian>}/>
        <Route path={book.lunch} render={() => <Guardian><Lunch /></Guardian>}/>
        <Route path={book.dinner} render={() => <Guardian><Dinner /></Guardian>}/>
        <Route path={book.fruits} render={() => <Guardian><Fruits /></Guardian>}/>
        <Route path={book.vegetables} render={() => <Guardian><Vegetables /></Guardian>}/>
        <Route path={book.junk} render={() => <Guardian><Junk /></Guardian>}/>
        <Route path={book.coffee} render={() => <Guardian><Coffee /></Guardian>}/>
        <Route path={book.steps} render={() => <Guardian><Steps /></Guardian>}/>
        <Route path={book.sleep} render={() => <Guardian><Sleep /></Guardian>}/>
        <Route path={book.water} render={() => <Guardian><Water /></Guardian>}/>
        <Route render={() => <NotFound/>}/>

      </Switch>
    </>
  )
}