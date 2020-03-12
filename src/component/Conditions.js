import React,{Component} from "react";

class Conditions extends Component{

    constructor(props) {
        super(props);
        this.state={
            time : new Date
        }


    }


    render() {
        return <div>{this.state.time.toLocaleTimeString()}</div>

    }

    componentDidMount()
    {
        setInterval(()=>{
            this.setState({time : new Date})
        },100);

    }


}

export default Conditions;
