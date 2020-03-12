import React from "react";

function Addnewtaskitem(props)
{
    const valueinput =props.valueinput;
    const addtonewtask=props.addtonewtask;
    const addTask =props.addTask;

    return(<div className={"adding"}> <input value={valueinput} onChange={addtonewtask} type="text"/>
        <button onClick={addTask} >Add Task</button>
    </div>)
}
export default Addnewtaskitem;
