import React from "react";

function Layout(props) {
    return(
        <div style={
            {paddingTop: "4rem", 
            display:"flex", 
            flexDirection:"column",
            flexGrow: 1, 
            height: "calc(100vh - 5rem)",
            alignItems: "stretch"}
        }>
            {props.children}
        </div>
    )
}

export default Layout