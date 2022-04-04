import React from "react";

function Button(props){

    return(
        <button  type={props.type? props.type : ''}>
            {props.btnName}
        </button>
    )
}

export default Button ;