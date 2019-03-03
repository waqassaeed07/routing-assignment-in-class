import React, {Component} from "react";
import "./leftside.css"
import {Route,Link} from 'react-router-dom';
import First from './first';
import Second from "./second"
import Third from "./third"
import Fourth from "./fourth"

class Leftside extends Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-3 maino">
            <Link to="/first" className="fstyle">First </Link>
            <br/>
            <Link to="/second" className="fstyle">Second </Link>
            <br/>
            <Link to="/third" className="fstyle">Third </Link>
            <br/>
            <Link to="/fourth" className="fstyle">Fourth </Link>
            </div>

            <div className="col-md-9 ">
             
              <Route path='/first' component={First}/>
              <Route path='/second' component={Second}/>
              <Route path='/third' component={Third}/>
              <Route path='/fourth' component={Fourth}/>
              
            </div>


         </div>
       </div>

        );
    }
}
export default Leftside;