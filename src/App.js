import React, { Component } from 'react';

import './App.css';
// import Table from "./component/table"
import {BrowserRouter,router,link} from "react-router-dom"
import Header from "./component/header"
import Leftside from "./component/leftside"
import Footer from "./component/footer"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div className="App">
      <Header/>
      <Leftside/> 
      <Footer />
      
      {/* <Table/> */}
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
