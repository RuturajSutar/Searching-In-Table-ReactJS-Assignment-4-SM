import React from "react";
import MyTableCell from "./MyTableCell";
import "./TableBody.css";

const TableBody = (props) => {
    return (
        <div className = "mytr">
            <MyTableCell newItem = {props.myItem}></MyTableCell>
        </div>
    );
}

export default TableBody;