import React, {Component} from "react";

import "./css/testcondtion.css"

function Users() {

    let users=[
        {id:1 ,name:"ali",age:30},
        {id:2 ,name:"omar",age:66},
        {id:3 ,name:"muhamad",age:40},
        {id:4 ,name:"abad",age:12}
    ];

 return<ui>
        {users.map(user=> <li key={user.id}>{user.name}{"\t\t\t"}{user.age}</li>)}

    </ui>


}


class testconditions extends Component{
    constructor(props) {
        super(props);
        this.changetext=this.changetext.bind(this);
    }
    state={
        text:"ali"
    };
    changetext(event)
    {
        this.setState({text:event.target.value});
        if(event.target.value==12)
        {
            this.setState({text:"the number equal 12 "});
        }
        else
        {

        }

    }
    render(){





       return <div className={"testcondtion"}>
           test condtion
           <br/>

           <p id={"adddatat"}>{this.state.text} </p>

       <input type="text" onChange={this.changetext}/>
       <Users/>
       <Users/>




       </div>
    }
}

export default testconditions;
