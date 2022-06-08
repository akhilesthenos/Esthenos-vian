import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./NavLinkCust";

const MasteryContainer = () => {
    return (
        <div className="MasteryContainer">
            <span className="MasteryBodySpan">
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    Android
                </NavLink>
            </span>
            {/* <NavLinkCust url="viantech" clsName="MasteryBodySpan"/> */}
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    Backend
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    Web
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    iOS
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    DevSecOps
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    Data Engineering
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    PoS/IoT
                </NavLink>
            </span>
            <span className="MasteryBodySpan">
                {" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    QA &#40;automation&#41;
                </NavLink>
            </span>
        </div>
    );
};

export default MasteryContainer;
