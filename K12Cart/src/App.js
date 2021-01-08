import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'

import Cart from './Components/Cart';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myorders from './Components/Myorders';
import Logout from './Components/Logout';
import Default from './Components/Default';



function App() {
const token = true
  return (
    <div className="relative pb-10 min-h-screen">

      <Router>
        
        <Header />

        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path='/signin'>
          <Signin />
          </Route>
          <Route path='/signup'>
          <Signup />
          </Route>
          <Route path='/myorders'>
          <Myorders/>
          </Route>
          <Route path='/logout'>
         <Logout  token ={token}/>
          </Route>
          <Route >
         <Default  />
          </Route>
        </Switch>
      
        </div>

        <Footer />

      </Router>
    
    </div>
  );
}

export default App;
