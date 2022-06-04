import React from "react";
import "../../stylesheets/header.css"

export const Navbarlist = (props) => {
    return(
        <>
            <ul className="navlist__cont" id={props.id}>
                {props.options.map((element, index) => {
                    return <li key={index} className={"navlist__item"}>{element}</li>
                })}
            </ul>
        </>
    )
}