import React from "react";
import { NavLink } from "react-router-dom";

//Icons
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-content'>
                    <ul>
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
                </div>
                <div className='nav-footer container'>
                    <div className='nav-footer-block'>
                        <div className='item'>
                            <p className='label'>Email</p>
                            <a href='mailto: maccestudiopro@gmail.com'>maccestudiopro@gmail.com</a>
                        </div>
                        <div className='item'>
                            <p className='label'>Téléphone</p>
                            <a href='tel:+336677592786'>06 77 59 27 86</a>
                        </div>
                    </div>
                    <div className='nav-footer-block'>
                        <div className='item'>
                            <NavLink to='/mentions-legales' exact>
                                Mentions Légales
                            </NavLink>
                        </div>
                    </div>
                    <div className='social'>
                        <div className='item'>
                            <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                                <Instagram />
                            </a>
                        </div>
                        <div className='item'>
                            <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                                <Pinterest />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
