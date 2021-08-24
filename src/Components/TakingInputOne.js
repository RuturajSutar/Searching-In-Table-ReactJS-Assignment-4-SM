import React from "react";
import ActualForm from "./ActualForm";
import "./TakingInputOne.css";

const TakingInputOne = (props) => {
    const getDataFromActualForm = (receivedData) => {
        const receivedDataTwo = {
            ...receivedData , id : Math.random().toString()
        };
        console.log("In TakingInputOne.js");
        console.log(receivedDataTwo);
        props.onGetData(receivedDataTwo);
    }
    return (
        <div className = "center">
            <ActualForm onGetDataTwo = {getDataFromActualForm}></ActualForm>
        </div>
    );
}

export default TakingInputOne;