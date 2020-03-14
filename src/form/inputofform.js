import React,{Component} from "react";
import "./css/form.css";
import Resultform from "./result_form";

class inputform extends Component{

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

    Changeselectval(event)
    {
        this.setState({selectval:event.target.value});
        console.log(event.target.value);

    }
    changeA=(event)=>
    {
        this.setState({selA:event.target.checked})
    };

    changeB=(event)=>
    {
        this.setState({selB:event.target.checked})
    };
    changeC=(event)=>
    {
        this.setState({selC:event.target.checked})
    };
    changeCradio=(e)=>
    {
        this.setState({radio:e.target.value})
    };

    setName=(e)=>{
      this.setState({user:e.target.value})
    };


    setPass=(e)=>{
        this.setState({pass:e.target.value})
    };


    render() {
        return(<div className="form">



             <div className="container">
                 <h2>Form Validation</h2>

                 <form action="/action_page.php" className="needs-validation" noValidate>
                     <div className="form-group">
                         <label htmlFor="uname">Username:</label>
                         <input type="text" className="form-control" onChange={this.setName } id="uname" placeholder="Enter username"
                                name="uname" required/>


                     </div>
                     <div className="form-group">
                         <label htmlFor="pwd">Password:</label>
                         <input type="password" className="form-control" id="pwd" onChange={this.setPass} placeholder="Enter password"
                                name="pswd" required/>


                     </div>
                     <div className="form-group form-check">
                         <label className="form-check-label">
                             <div className="form-check-inline">
                                 <label className="form-check-label">
                                     <input type="checkbox" className="form-check-input" onChange={this.changeA}  checked={this.state.selA} name="A" value=""/>A
                                 </label>
                             </div>
                             <div className="form-check-inline">
                                 <label className="form-check-label">
                                     <input type="checkbox" className="form-check-input" onChange={this.changeB}  checked={this.state.selB} name="A" value=""/>B
                                 </label>
                             </div>
                             <div className="form-check-inline">
                                 <label className="form-check-label">
                                     <input type="checkbox" className="form-check-input" onChange={this.changeC} checked={this.state.selC}  name="A"  value=""/>C
                                 </label>
                             </div>
                         </label>
                     </div>

                     <div className="form-check-inline">
                         <label className="form-check-label">
                             <input type="radio"  value="1" Checked={this.state.radio=="1"} onChange={this.changeCradio}  className="form-check-input" name="optradio"/>A
                         </label>
                     </div>
                     <div className="form-check-inline">
                         <label className="form-check-label">
                             <input type="radio"  value="2" Checked={this.state.radio=="2"} onChange={this.changeCradio} className="form-check-input" name="optradio"/>B
                         </label>
                     </div>
                     <div className="form-check-inline disabled">
                         <label className="form-check-label">
                             <input type="radio"  value="3" Checked={this.state.radio=="3"} onChange={this.changeCradio} className="form-check-input" name="optradio" />C
                         </label>
                     </div>
                     <br/>
                     <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
                 <select value={this.state.selectval} onChange={this.Changeselectval}>
                     <option value="1"> 1</option>
                     <option value="2"> 2</option>
                     <option value="3"> 3</option>
                     <option value="4"> 4</option>
                 </select>


             </div>








        </div>);

    }
}
export default inputform;
