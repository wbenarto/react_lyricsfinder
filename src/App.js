import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Test from './components/layout/Test'

import { Provider } from './context'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Test />
      </div>
      // <Provider>
      // <Router>
      //   <React.Fragment>
      //     <Navbar />
      //       <div className='container'>
      //         <Switch>
      //           <Route exact path='/' component={Index} />
      //           <Route exact path='/lyrics/track/:id' component={Lyrics} />
      //         </Switch>
      //       </div>
      //   </React.Fragment>
      // </Router>
      // </Provider>
    );
  }
}

export default App;
