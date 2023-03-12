import React from "react";

function MyImage(props) {
    return (
        <img src={props.image} alt={props.value} draggable="false" style={{ marginTop: props.sty }} />
    )

}

export default MyImage;