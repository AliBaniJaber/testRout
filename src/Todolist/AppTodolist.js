 import React,{Component} from "react";


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
            <div>
                {this.state.todos.map((todo,index)=><li key={index}>{todo.text}
                <button onClick={()=>{this.complettask(index)}}>Done</button></li>)}
                <input onChange={this.addtonewtask} type="text"/>
                <button onClick={this.addTask} addTask>Add Task</button>
            </div>)
    }
}

export default AppTodolist;
