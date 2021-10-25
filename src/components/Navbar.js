import React from "react";

function Navbar() {
    const navbar = {
        borderBottom: "1px var(--border) solid", 
        width: "100%", 
        position: "fixed",
        top: 0, 
        left: 0,
        background: "var(--background-alt)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        maxHeight: "40px"
    }

    return (
        <div style={navbar}>
            <h2>Students List</h2>
        </div>
    )
}

// const style = {
//     borderB
// }

export default Navbar