import React from "react";
import '../styles/matchButtons.css';


function SideButton() {
    return (
        <div className="button-container">
            <button className="side-button">
                <span className="material-symbols-outlined" style={{ fontSize: '100pt' }}>
                    person_add
                </span>
            </button>
            <button className="match-button">let's watch.</button>
        </div>
    );
}

export default SideButton