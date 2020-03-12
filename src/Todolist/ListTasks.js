import React from "react";

function ListTasks(props)
{
    const complettask=props.complettask;
    const todo=props.todo;
    return(<div className={"div2"}><li >{todo.text}
        <button onClick={complettask}>Done</button></li> </div>)

}

export default ListTasks;
