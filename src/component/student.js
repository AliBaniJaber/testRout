import React,{Component} from "react";
import "./css/student.css";
class student extends Component{

    state=
        {
            age:20,
            user:
            {
                firstname:"ali",
                lastNAME:"BANI JABER"
            },

            socialLinks:
            [
                "facebook" ,
                "twitter",
            ]





        };



    render()
    {
        return <div className="stu">ID: {this.props.ID} name: {"\t\t\t"+this.props.name} BD: {"    "+this.props.BD}
        <br/>
        age:  {this.state.age}  firsname:{this.state.user.firstname }  lasrname:{this.state.user.lastNAME}
        <br/>
            socialLinks:{this.state.socialLinks[0] } {this.state.socialLinks[1] }


        </div>
    }
}
export default student;
