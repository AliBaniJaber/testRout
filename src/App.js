import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import about from "./Component/about";
import home from "./Component/home";
class App extends Component{
 render() {
   return (
       <div className="App">
       <BrowserRouter>

               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Route path="/"  exact component={home}/>
               <Route path="/about"  component={about}/>


       </BrowserRouter>
       </div>

   );
 }


}

export default App;
