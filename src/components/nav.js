import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/services' exact>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projets' exact>
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' exact>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' exact>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
