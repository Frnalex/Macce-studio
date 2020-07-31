import React from "react";
import { NavLink } from "react-router-dom";

//Components
import Link from "../Link/Link";

export default function Intro() {
    return (
        <section className='home-intro'>
            <div className='intro-text'>
                <p className='text-sub'>Intro</p>
                <h2 className='text-lg'>
                    <div className='line'>
                        <span>Studio basé en Corse,</span>
                    </div>
                    <div className='line'>
                        <span>spécialisé en création</span>
                    </div>
                    <div className='line'>
                        <span>de contenu digital</span>
                    </div>
                    <div className='line'>
                        <span>& community management.</span>
                    </div>
                </h2>
            </div>
            <Link>
                <NavLink to='/services' className='link' exact>
                    Voir nos services
                </NavLink>
            </Link>
        </section>
    );
}
