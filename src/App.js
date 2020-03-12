import React,{Component} from 'react';
import ComponentReact from './component/functioncomponent';
import Student from './component/student';
import "./css/Student.css";
import FormStudent from "./component/formStudent";
import Lists from "./component/lists";
import Condition from "./component/Conditions";


function aliattr(){
 return <p> ali test function attr</p>
}



class App extends Component{

 state=
     {

     };


 render() {
   return (
       <div>
       <div className="Student">
           <Student ID="1" name="ali" BD="1-17-1999"> </Student>
           <Student ID="1" name="ali" BD="1-17-1999"> </Student>
           <Student ID="1" name="ali" BD="1-17-1999"> </Student>
       </div>
           {/*<FormStudent/>*/}
           <Lists/>
           <Condition/>

       </div>

   );
 }


}

export default App;
