import React from "react";
import { NavLink } from "react-router-dom";

//Icons
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav-content container'>
                <div className='top'>
                    <ul className='text-lg'>
                        <li>
                            <NavLink to='/' exact>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projets' exact>
                                Projets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' exact>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' exact>
                                à Propos
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <p className='text-sub'>Email</p>
                        <a href='mailto: maccestudiopro@gmail.com'>maccestudiopro@gmail.com</a>
                    </div>
                    <div className='item'>
                        <p className='text-sub'>Téléphone</p>
                        <a href='tel:+336677592786'>06 77 59 27 86</a>
                    </div>
                    <div className='item'>
                        <NavLink to='/mentions-legales' exact>
                            Mentions Légales
                        </NavLink>
                    </div>
                    <div className='item social'>
                        <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                            <Instagram />
                        </a>
                        <a href='https://www.pinterest.fr/maccestudiopro/' target='_blank' rel='noopener noreferrer'>
                            <Pinterest />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
