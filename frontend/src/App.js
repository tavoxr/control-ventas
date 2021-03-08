
import React, {Fragment} from 'react'
import './App.css';
import Product from './components/Product/Product'
// import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CreateProductForm from './components/Product/CreateProductForm';
import PrivateRoute  from './components/privateRoute/PrivateRoute'
import Login from './components/account/Login';
import Register from './components/account/Register';
import { loadUser } from './redux/actions/auth';
import Cart from './components/Cart/Cart';
import Store from './components/Store/Store';


class App extends React.Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
render(){
  return (
    <Provider store={store}>
      
      
      


        <div className="App">

          <Router >
      <Navbar/>


          <Switch>

            <PrivateRoute exact path="/products" component={Product}/>
              {/* <PrivateRoute exact path="/products-create" component={CreateProductForm}/> */}
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute exact path="/cart" component={Cart}/>
              <PrivateRoute exact path="/store" component={Store}/>

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

                
              
          </Switch>
          </Router>
          
        </div>
        
  
    </Provider>
      

    
  );
}
}

export default App;
