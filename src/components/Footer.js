import React from "react";

function Footer(props) {
    const footer = {
        flex: "0 0 auto",
        display: 'flex',
        justifyContent: 'center',
        background: props.color
    }

    return (
        <div style={footer}>
            <p>Made with ❤️ and ☕️</p>
        </div>
    )
}



export default Footer