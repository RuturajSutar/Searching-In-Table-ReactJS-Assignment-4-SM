import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./TableOne.css";

const TableOne = (props) => {
    let isAll = false;
    if(props.filter === "Filter By" || props.value === ""){
        isAll = true;
    }
    if(props.filter === "First Name"){
        let fNameArray = props.array.filter(a => a.fname.includes(props.value));
        return(
            <div className = "center">
                <TableHead></TableHead>
                {fNameArray.map(sampleItemone => <TableBody myItem = {sampleItemone} key = {sampleItemone.id}></TableBody>)}
            </div>
        );
    }
    if(props.filter === "Last Name"){
        let lNameArray = props.array.filter(a => a.lname.includes(props.value));
        return(
            <div className = "center">
                <TableHead></TableHead>
                {lNameArray.map(sampleItemtwo => <TableBody myItem = {sampleItemtwo} key = {sampleItemtwo.id}></TableBody>)}
            </div>
        );
    }
    if(props.filter === "Age"){
        let ageArray = props.array.filter(a => a.age.includes(props.value));
        return(
            <div className = "center">
                <TableHead></TableHead>
                {ageArray.map(sampleItemthree => <TableBody myItem = {sampleItemthree} key = {sampleItemthree.id}></TableBody>)}
            </div>
        );
    }
    return (
        <div className = "center">
            <TableHead></TableHead>
            {isAll && props.array.map(item => <TableBody myItem = {item} key = {item.id}></TableBody>)}
        </div>
    );
}

export default TableOne;