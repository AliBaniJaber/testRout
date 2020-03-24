import React,{Component} from "react";
import "./css/form.css";
import Inputform from "./inputofform";
import Result from "./result_form";
class Form extends Component{



    render() {
        return(<div>
            <Inputform/>
            <Result/>
        </div>)


    }
}
export default Form;
