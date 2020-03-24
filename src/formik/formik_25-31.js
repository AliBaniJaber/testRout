import React,{Component} from "react";
import {Formik,Field, ErrorMessage} from "formik";
import * as Yup from "yup";
class formik extends Component {

    onsubmit=(val)=>{
        console.log(val);

    };

    form=(props)=>
    {
        return(
            <form onSubmit={props.handleSubmit}>
                <Field name={"name"}/>
                <ErrorMessage name={"name"}/>
                <Field name={"email"} type="email"/>
                <ErrorMessage name={"email"}/>

                <Field name={"type"} component="select">
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>


                </Field>
                <ErrorMessage name={"type"}/>

                <Field name={"activ"} type={"checkbox"}/>
                <Field name={"cat"} type={"radio"} value={"1"}/>
                <Field name={"cat"} type={"radio"} value={"2"}/>
                <ErrorMessage name={"cat"}/>

                <button type={"submit"}>send</button>
            </form>
        )
    };

    Schema=()=>
    {
        const schema=Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().required(),
            cat:Yup.string().required(),
            type:Yup.string().required()


        });
       return schema;
    };

    render() {
        return(<div>
         <Formik initialValues={{name:"as", email:"email"}}
         onSubmit={this.onsubmit}
         render={this.form}
         validationSchema={this.Schema()}/>
        </div>)
    }


}
export default formik;
