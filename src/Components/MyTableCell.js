import React from "react";
import "./MyTableCell.css";

const MyTableCell = (props) => {
    return (
        <div className = "tc">
            <td className = "one">{props.newItem.fname}</td>
            <td className = "two">{props.newItem.lname}</td>
            <td className = "three">{props.newItem.age}</td>
        </div>
    );
}

export default MyTableCell;