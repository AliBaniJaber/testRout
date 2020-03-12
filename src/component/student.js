import React,{Component} from "react";
import "./css/student.css";
class student extends Component{

    constructor(props)
    {
        super(props);
        this.incremant=this.incremant.bind(this);
        this.changename=this.changename.bind(this);
    }
    state={
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
    incremant ()
     {
         this.setState({age :this.state.age+1});
     }
    changename(event)
    {
        const newname=event.target.value;
        this.setState({user:{
            ...this.state.user,
            firstname: newname
        }
        });

    }
    render()
    {
        return <div className="stu">ID: {this.props.ID} name: {"\t\t\t"+this.props.name} BD: {"    "+this.props.BD}
        <br/>
        age:  {this.state.age}  firsname:{this.state.user.firstname }  lasrname:{this.state.user.lastNAME}
        <br/>
            socialLinks:{this.state.socialLinks[0] } {this.state.socialLinks[1] }


            <button onClick={this.incremant}>incremant age</button>
            <input type="text" onChange={this.changename}/>


        </div>
    }
}
export default student;
