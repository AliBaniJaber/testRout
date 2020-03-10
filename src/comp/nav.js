import React,{Component} from "react";
import {Link , NavLink} from 'react-router-dom'
import blolk from './blolk'
class ALI extends Component{
    render() {
        return(
            <div>
                <a href="#" >login</a>
                  <ul>
                      <NavLink exact to="/74" >home</NavLink>
                      <NavLink  to="/about" >about</NavLink>
                      <NavLink  to="/blok" >blok</NavLink>

                  </ul>
            </div>
        )
    }

}
export default ALI;