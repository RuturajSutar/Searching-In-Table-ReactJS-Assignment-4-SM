import React from "react";
import "./TableHead.css";

const TableHead = () => {
    return(
        <div className = "th">
            <th className = "one">First Name</th>
            <th className = "two">Last Name</th>
            <th className = "three">Age</th>
        </div>
    );
}

export default TableHead;