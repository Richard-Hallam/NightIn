import React from "react";
import '../styles/matchButtons.css';
import FilterMenu from "./FilterMenu";


function SideButton() {
    return (
        <div className="button-container">
            <div className="filter-button">
            <FilterMenu/>
            </div>
            <button className="match-button">let's watch.</button>
        </div>
    );
}

export default SideButton