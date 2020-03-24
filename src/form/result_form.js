import React,{Component} from "react";
import {Formik ,Field} from "formik";
import "./css/form.css";
import Resultform from "./result_form";

class result_form extends Component{



    constructor(props) {
        super(props);
        this.Changeselectval=this.Changeselectval.bind(this)
    }

    state={
        user:"",
        pass:"",
        selectval:"",
        selA:true,
        selB:true,
        selC:true,
        radio:"3",

    };

    Changeselectval=(event)=>
    {
        const name=event.target.name;
        const type=event.target.type;
        let value;
        if(type=="checkbox")
            value=event.target.checked;
        else
            value=event.target.value;


        this.setState({[name]:value})


    };


    render() {
        return(<div className="result">



            <div className="container">
                <h2>Form Validation</h2>

                <form action="/action_page.php"  className="needs-validation" noValidate>
                    <div className="form-group">
                        <label htmlFor="uname">Username:</label>
                        <input type="text" className="form-control" onChange={this.Changeselectval} id="uname" placeholder="Enter username"
                               name="user" required/>


                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.Changeselectval} placeholder="Enter password"
                               name="pass" required/>


                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="selA"  checked={this.state.selA}   onChange={this.Changeselectval}  />A
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="selB"  checked={this.state.selB}    onChange={this.Changeselectval}  />B
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="selC" checked={this.state.selC}  onChange={this.Changeselectval}   />C
                                </label>
                            </div>
                        </label>
                    </div>

                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio"  value="1" Checked={this.state.radio=="1"} onChange={this.Changeselectval}  className="form-check-input" name="radio"/>A
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio"   value="2" Checked={this.state.radio=="2"} onChange={this.Changeselectval} className="form-check-input" name="radio"/>B
                        </label>
                    </div>
                    <div className="form-check-inline disabled">
                        <label className="form-check-label">
                            <input type="radio"   value="3" Checked={this.state.radio=="3"} onChange={this.Changeselectval} className="form-check-input" name="radio" />C
                        </label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <select  name="selectval" value={this.state.selectval} onChange={this.Changeselectval}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                </select>


            </div>








        </div>);

    }
}
export default result_form;
