import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing context
import GlobalState from './context/GlobalState';

// importing components
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';

// importing styles
import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <Router>
          <Switch>
            <Route path='/' component={ProductsPage} exact />
            <Route path='/cart' component={CartPage} exact />
          </Switch>
        </Router>
      </GlobalState>
    );
  }
}

export default App;
