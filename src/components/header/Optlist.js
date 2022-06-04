import React from "react";
// components
import { Navbarlist } from "./Navlinklist"
// stylesheets
import "../../stylesheets/header.css"

export const Optlist = (props) => {
    return (
        <>
            <div className="navlink_withopt-cont" onMouseOver={(event) => {
                document.getElementById(`id${props.name}`).style.display = "flex"
            }} onMouseLeave={(event) => {
                document.getElementById(`id${props.name}`).style.display = "none"
            }}>
                <div className="navlink_withopt">
                    <li className="navbar_link">{props.name}
                        <svg className="downarrow">
                            <polyline points="0,2 5,7 10,2" className="downarrow-ico" />
                        </svg>
                    </li>
                </div>
                <Navbarlist options={props.opts} id={`id${props.name}`}/>
            </div>
        </>
    )
}