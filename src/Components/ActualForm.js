import React, { useState } from "react";
import "./ActualForm.css";

const ActualForm = (props) => {
    const [f_name , setFName] = useState("");
    const [l_name , setLName] = useState("");
    const [m_age , setAge] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const myUser = {
            fname : f_name,
            lname : l_name,
            age : m_age
        }
        console.log("In ActualForm.js");
        console.log(myUser);
        props.onGetDataTwo(myUser);
        window.alert("Data submitted Successfully!!");
        setFName("");
        setLName("");
        setAge("");
    }
    return (
        <div className = "myform">
            <form onSubmit = {onFormSubmit}>
                <div>
                    <td className = "x">
                        <h4 id = "p">First Name : </h4>
                    </td>
                    <input value = {f_name} id = "q" type = "text" placeholder = "First Name" onChange = {(e) => {setFName(e.target.value)}}></input>
                </div>
                <div>
                    <td className = "y">
                        <h4 id = "r">Last Name : </h4>
                    </td>
                    <input value = {l_name} id = "s" type = "text" placeholder = "Last Name" onChange = {(e) => {setLName(e.target.value)}}></input>
                </div>
                <div>
                    <td className = "z">
                        <h4 id = "t">Age : </h4>
                    </td>
                    <input value = {m_age} id = "u" type = "number" placeholder = "Age" onChange = {(e) => {setAge(e.target.value)}}></input>
                </div>
                <br/>
                <div>
                    <button className = "four" type = "submit">Submit</button>
                </div>
                
            </form>

        </div>
    );
}

export default ActualForm;