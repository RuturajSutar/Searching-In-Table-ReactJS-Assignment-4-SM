import React from "react";
import "./SearchInput.css";

const SearchInput = (props) => {
    const SearchInputChanged = (event) => {
        console.log("Search in SearchInput.js");
        console.log(event.target.value);
        props.onDataIsAdded(event.target.value);
    }
    return (
        <div className = "inSameLine">
            <input className = "myinput" type = "text" placeholder = "Search here" onChange = {SearchInputChanged}></input>
        </div>
    );
}

export default SearchInput;