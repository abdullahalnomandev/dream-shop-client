import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admim/Admin';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nomatch from './Components/NoMatch/Nomatch';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterForm from './Components/Register/RegisterForm';

export const UseContext = createContext();

const App = () => {

  const [logInUser, setLoginUser] = useState({})

  return (
    <UseContext.Provider value={[logInUser, setLoginUser]}>
      <Router>
        <Header />
        <Switch>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/register">
            <RegisterForm />
          </Route>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <Nomatch />
          </Route>

        </Switch>

      </Router>
    </UseContext.Provider>
  );
};

export default App;