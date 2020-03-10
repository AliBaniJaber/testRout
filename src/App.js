import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ALI from './comp/nav';
import home from "./comp/Home";
import {BrowserRouter , Route} from 'react-router-dom';
import about from "./comp/about";
import blok from './comp/blolk';
class App extends Component{
 render() {
   return (
       <BrowserRouter>
           <div className="App">
               <ALI/>
               <Route exact path="/74" component={home}/>
               <Route  path="/about" component={about}/>
               <Route  path="/blok" component={blok}/>
           </div>
       </BrowserRouter>

   );
 }


}

export default App;
