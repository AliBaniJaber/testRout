import React,{Component} from "react";
import classnames from "classnames";
import "./css/ClassNamePak.css";
import axios from "axios"

async function getUsers()
{
    try {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        return response;
    }
    catch (e) {
        console.log("ERROR");
    }

}

async function deleteuserapi(id)
{
try {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/users" + id);
    console.log(response);
    return response;
}
catch(e) {
 console.error(e);
}


}


class ClassNamePak extends Component
{

    state={
        users:[],
        activ:{}
      };





    componentDidMount=()=>{
        getUsers().then(response=>{
            this.setState({
                users:response.data
            });
        });
    };

    setActiv=(user)=>
    {
          this.setState({'activ':user});
    };
    deleteUser=(user)=>
    {
        //delet from state

        //delet from serveer
          deleteuserapi(user.id).then(()=>{

            let userss=this.state.users;
            const index=userss.indexOf(user);
            userss.splice(index,1);
            this.setState({userss});

           });



    };




    render() {
        let classes =classnames({gre:"w"=="w"});

        return(<div>

        <div className={classes}>
            <ui>
                {this.state.users.map(user=>
                <li key={user.id}>{user.name}
                <button onClick={()=>this.setActiv(user)}>View</button> <button onClick={()=>this.deleteUser(user)}>Delete </button>
                </li>

                )}
            </ui>
        </div>

            <div>{this.state.activ.name}</div>




        </div>)
    }
}

export default ClassNamePak;
