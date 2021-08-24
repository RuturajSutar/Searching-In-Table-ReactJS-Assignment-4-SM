import React from "react";
import FilterSearchBy from "./FilterSearchBy";
import "./SearchBar.css";
import SearchInput from "./SearchInput";

const SearchBar = (props) => {

    const recieveDataFromFilterSearchBy = (myData) => {
        console.log("Filter in SearchBar.js");
        console.log(myData);
        props.onDataGetTwo(myData);
    }
    const receiveDataFromSearchInput = (data) => {
        console.log("Search in SearchBar.js");
        console.log(data);
        props.onDataGetThree(data);
    }
    return (
        <div className = "center">
            <FilterSearchBy defaultFilterTwo = {props.defaultFilter} onDataAdd = {recieveDataFromFilterSearchBy}></FilterSearchBy>
            <SearchInput onDataIsAdded = {receiveDataFromSearchInput}></SearchInput>
        </div>
    );
}

export default SearchBar;
