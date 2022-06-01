import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import store from './store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store} >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
    </Provider>
  );
};

export default App;
