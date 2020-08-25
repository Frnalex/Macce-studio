import React from "react";
import { NavLink } from "react-router-dom";

const Projet = ({ children }) => {
    return (
        <div className='projet'>
            <NavLink to='/projet-page' exact>
                <h2 className='text-lg'>
                    {children.name}
                    <span>{children.name}</span>
                </h2>
            </NavLink>
        </div>
    );
};

export default Projet;
