import React,{Component} from "react";
import "./css/student.css";
class student extends Component{

    state=
        {

        };



    render()
    {
        return <div className="stu">{this.props.ID}{"\t\t\t"+this.props.name}{"    "+this.props.BD}  </div>
    }
}
export default student;
