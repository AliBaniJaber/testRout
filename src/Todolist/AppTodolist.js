import React,{Component} from "react";
import ListTasks from "./ListTasks";
import Addnewtaskitem from "./Addnewtaskitem";
import "./css/AppTodolist.css";
class AppTodolist extends Component
{
    state=
    {
        newTask:"",
        todos:[
            {text:"react.js"},
            {text:"node.js"},
        ]
    };
    complettask(index)
    {
        const todos=[...this.state.todos];
        console.log(index);
        todos.splice(index,1);
        this.setState({todos});


    }
    constructor(props) {
        super(props);
        this.complettask=this.complettask.bind(this);
        this.addtonewtask=this.addtonewtask.bind(this);
        this.addTask=this.addTask.bind(this);
    }

    addtonewtask(event){
        this.setState({newTask:event.target.value});

    };
    addTask()
    {
        const todo=[...this.state.todos];
        todo.push({text:this.state.newTask});
        this.setState({todos:todo,newTask:""});
    }
    render() {
        return(
            <div className={"maindiv"}>
                {this.state.todos.map((todo,index)=><ListTasks  key={index} todo={todo} complettask={()=>{this.complettask(index)}}/>)}

             <br/>
               <Addnewtaskitem  valueinput={this.state.newTask} addtonewtask={this.addtonewtask} addTask={this.addTask} />
            </div>)
    }
}

export default AppTodolist;
