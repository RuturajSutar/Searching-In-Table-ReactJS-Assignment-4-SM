import React from "react";
import "./FilterSearchBy.css";

const FilterSearchBy = (props) => {

    const onFilterChange = (event) => {
        console.log("Filter in FilterSearchBy.js");
        console.log(event.target.value);
        props.onDataAdd(event.target.value)
    }
    
    return (
        <div className = "inline">
            <select value = {props.defaultFilterTwo} className = "myselect" onChange = {onFilterChange}>
                <option value = "Filter By">Filter By</option>
                <option value = "First Name">First Name</option>
                <option value = "Last Name">Last Name</option>
                <option value = "Age">Age</option>
            </select>
        </div>
    );
}

export default FilterSearchBy;