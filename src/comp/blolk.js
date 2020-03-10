import React , {Component} from "react";
import axios from 'axios';
class blolk extends Component{

    state={
        users:[]
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
             this.setState({
                 users:res.data
             })

            }

        )
    }


    constructor(){
        super();

    }



    render() {
        return(
            <div>
                <h2> blok</h2>

                <div className="wq">
                    {
                        this.state.users.map(user=>
                            <span>
                                {user.name}
                                <hr/>
                            </span>

                        )
                    }
                </div>
            </div>
        )
    }

}
export default blolk;