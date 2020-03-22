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

        const response=await axios.delete("https://jsonplaceholder.typicode.com/users"+id);
        console.log(response);
        return response;



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

            let users=this.state.users;
            const index=users.indexOf(user);
            users.splice(index,1);
            this.setState({users});

        }).catch(error=>{alert("error")});



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

            <div>{this.state.activ.id}</div>




        </div>)
    }
}

export default ClassNamePak;
