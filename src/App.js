import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import TableOne from "./Components/TableOne";
import TakingInputOne from "./Components/TakingInputOne";

function App() {

  const [MyArray , setArray] = useState([]);

  const [myFilter , setMyFilter] = useState("Filter By");
  const [input , setInput] = useState("");


  useEffect(() => {
    const data = localStorage.getItem("MyArray");
    if(data) {
      setArray(JSON.parse(data));
    }
  } , []);

  useEffect(() => {
    localStorage.setItem("MyArray" , JSON.stringify(MyArray));
  } , [MyArray]);



  const getDataFromTakingInputOne = (myData) => {
      console.log("In App.js");
      console.log(myData);
      setArray((prevState) => {
        return [myData , ...prevState];
      });
  }

  const recieveDataFromSearchBar = (myopt) => {
      console.log("Filter In App.js");
      console.log(myopt);
      setMyFilter(myopt);
      
  }

  const recieveDataFromSearchBarTwo = (newData) => {
      console.log("Search In App.js");
      console.log(newData);
      setInput(newData);
  }

  return (
    <div>
      <TakingInputOne onGetData = {getDataFromTakingInputOne}></TakingInputOne>
      <SearchBar onDataGetTwo = {recieveDataFromSearchBar} onDataGetThree = {recieveDataFromSearchBarTwo} defaultFilter = {myFilter}></SearchBar>
      <TableOne array = {MyArray} filter = {myFilter} value = {input}></TableOne>
    </div>
  );
}

export default App;
