import React from "react";
import { NavLink } from "react-router-dom";

const Projet = ({ children }) => {
    return (
        <div className='projet'>
            <NavLink to='/about' exact>
                <h2 className='text-lg' data-name={children.name}>
                    {children.name}
                </h2>
            </NavLink>
        </div>
    );
};

export default Projet;
