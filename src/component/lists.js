import React from "react";
import "./css/lists.css";
function Lists(props){
    const fruits=["apple" , "orange" ,"banana"];

    return <div className="list">
        <ui >
        {fruits.map(item=><li key={item}>{item}</li>)}
        </ui>
    </div>

}
export default Lists;
